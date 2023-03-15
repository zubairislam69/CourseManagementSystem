import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const LecturerDetailPopUp = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button type="button" className="btn btn-outline-dark m-2" onClick={handleShow}>Details</button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Professor Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>EMPTY PROFESSOR MODAL</p>
                </Modal.Body>
                {/* <Modal.Footer>
                </Modal.Footer> */}
            </Modal>
        </>
    );
}

export default LecturerDetailPopUp;