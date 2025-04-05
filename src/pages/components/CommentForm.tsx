import { ChangeEvent, MouseEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";

type Props = {
    addComment: (textValue: string) => void
    isPosting: boolean
}

export default function CommentForm({ addComment, isPosting }: Props ) {

    // State for currently inputted values from the form to be handled by handleSubmit
    const [inputValue, setInputValue] = useState({
        text: ""
    })

    // Clears the form by returning the setInputValues state back to default
    const clearForm = () => {
        setInputValue({
            text: ""
        })
    }
    
    // Handles the changes caused by users inputting information into the form
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue({
            text: event.target.value
        })
    }

    // Handles the submitting of information from the form before resetting the state back to default
    const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        addComment(inputValue.text)
        clearForm()
    }

    return (
        <>
            {/** React-Bootstrap Form the user inputs their comment into for POSTing */}
            <Form>
                <Form.Group controlId="formBasicText" className="mb-3">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                        type="text"
                        disabled={isPosting}
                        placeholder="Comment"
                        onChange={handleChange}
                        value={inputValue.text}
                    />
                </Form.Group>

                {/** Calls handleSubmit to POST the comment into db.json */}
                <Button variant="primary" type="submit" disabled={isPosting} onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </>
    )
}