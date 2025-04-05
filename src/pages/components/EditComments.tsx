import { ChangeEvent, MouseEvent, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

type Props = {
    editComment: (idToUpdate: number, editValue: string) => Promise<void>
    comment: {
        id: number
        text: string
    }
    isPutting: boolean
    isDeleting: boolean
}

export default function EditComments({editComment, comment, isPutting, isDeleting} : Props) {

    // Sets whether the modal shows or not
    const [show, setShow] = useState(false);
    
    // State for currently inputted values from the form to be handled by handleSubmit
    const [editValue, setEditValue] = useState({
        text: comment.text
    })

    // Handles the showing and closing of the Modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // Handles the changes caused by users inputting information into the form
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEditValue({
            text: event.target.value
        })
    }

    // Handles the submitting of information from the form before resetting the state back to default
    const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        await editComment(comment.id, editValue.text);
        handleClose()
    }

    return (
        <>
            {/** 
             * When the button is clicked, shows the Modal 
             * disabled when deleting
             * */}
            <Button variant="success" disabled={isDeleting} onClick={handleShow}>
                Edit
            </Button>

            {/** The Modal itself */}
            <Modal show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                {/** Title reflects what the user is doing on the Modal */}
                <Modal.Header closeButton>
                    <Modal.Title>EDIT</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/** React-Bootstrap form where the user updates their comment */}
                    <Form>
                        <Form.Group controlId="formBasicText" className="mb-3">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control
                                type="text"
                                disabled={isPutting}
                                placeholder={comment.text}
                                onChange={handleChange}
                                value={editValue.text}
                            />
                        </Form.Group>

                        {/** When clicked, calls handleSubmit which makes an api call 
                         * for PUTting the updated Comment
                         * */}
                        <Button variant="primary" type="submit" disabled={isPutting} onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>

                    {/**Closes the Modal */}
                    <Button variant="secondary" disabled={isPutting} onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}