import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Comments from "./Comments";

type Props = {
    name: string
    title: string
    rank: number
    reason: string
}

export default function Review({ name, title, rank, reason }: Props) {
    
    // Sets whether the modal will show or not
    const [show, setShow] = useState(false);

    // Handles the closing and showing of the modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
            {/** React-Bootstrap Button that, when clicked, shows the Modal */}
            <Button variant="primary" onClick={handleShow}>
                Go To Review
            </Button>

            {/** React-Bootstrap Modal that contains the review itself and also comments */}
            <Modal show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                {/** When clicked, closes the modal */}
                <Modal.Header closeButton>

                    {/** The Name of the Game for the Review */}
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {/** 
                     * Renders the title, rank out of 10, and the reason for 
                     * that rank in the Modal Body 
                     */}
                    
                    <h2>{title} ({rank}/10)</h2>
                    <p>{reason}</p>
                    <h3>Comments:</h3>

                    {/** Renders the Comments from db.json */}
                    <Comments />
                </Modal.Body>
                <Modal.Footer>
                    {/** When clicked, closes the modal */}
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}