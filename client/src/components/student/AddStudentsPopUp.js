import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios'

const StudentsPopUp = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [studentID, setStudentID] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [program, setProgram] = useState('')

    const handleChange = (event) => {
        if (event.target.name === "firstName") {
            setFirstName(event.target.value)
        }
        else if (event.target.name === "lastName") {
            setLastName(event.target.value)
        }
        else if (event.target.name === "program") {
            setProgram(event.target.value)
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const studentLog = {
            studentID: studentID,
            firstName: firstName,
            lastName: lastName,
            program: program
        };

        const response = await Axios.post(
            "http://localhost:5000/addStudent",
            studentLog
        );


        setShow(false)
        window.location.reload()
    }

    return (
        <>
            <button type="button" className="btn btn-outline-success btn-sm my-2" onClick={handleShow}>Add Student</button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Student</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form method='post'>
                        <div class="form-group">
                            <div class="col-auto">
                                <label htmlFor="firstName" class="col-form-label">First Name</label>
                            </div>
                            <div class="col-auto">
                                
                                <input 
                                    name="firstName" 
                                    type="text" 
                                    id="firstName" 
                                    class="form-control"
                                    onChange={handleChange}/>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-auto">
                                <label htmlFor="lastName" class="col-form-label">Last Name</label>
                            </div>
                            <div class="col-auto">
                                <input 
                                    name="lastName" 
                                    type="text" 
                                    id="lastName" 
                                    class="form-control"
                                    onChange={handleChange}/>
                            </div>
                        </div>

                        <div class="form-group mb-2">
                            <div class="col-auto">
                                <label htmlFor="program" class="col-form-label">Student Program</label>
                            </div>
                            <div class="col-auto">
                                <input
                                    name="program" 
                                    type="text" 
                                    id="program"
                                    class="form-control"
                                    onChange={handleChange}/>
                            </div>
                        </div>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <button type="submit" onClick={handleSubmit } className="btn btn-primary">Add</button> 
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default StudentsPopUp;