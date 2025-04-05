import { ChangeEvent, MouseEvent, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

type Props = {
    editComment: (idToUpdate: number, editValue: string) => Promise<void>
    comment: {
        id: number
        text: string
    }
}

export default function EditComments({editComment, comment} : Props) {

    const [show, setShow] = useState(false);
    
    // State for currently inputted values from the form to be handled by handleSubmit
    const [editValue, setEditValue] = useState({
        text: comment.text
    })

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
            <Button variant="success" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title>EDIT</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicText" className="mb-3">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={comment.text}
                                onChange={handleChange}
                                value={editValue.text}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}