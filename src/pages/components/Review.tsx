import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Comments from "./Comments";

type Props = {
    name: string
    title: string
    rank: number
    reason: string
}

export default function Review({ name, title, rank, reason } : Props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Go To Review
            </Button>

            <Modal show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2>{title} ({rank}/10)</h2>
                    <p>{reason}</p>
                    <h3>Comments:</h3>
                    <Comments />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}