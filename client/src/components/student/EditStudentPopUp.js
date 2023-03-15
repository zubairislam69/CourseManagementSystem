import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios'

const EditStudentPopUp = ({ studentInfo }) => {
    const [show, setShow] = useState(false);
    console.log(studentInfo[0])
    const [studentID, setStudentID] = useState(0)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [program, setProgram] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setStudentID(studentInfo[0].studentID)
        setFirstName(studentInfo[0].firstName)
        setLastName(studentInfo[0].lastName)
        setProgram(studentInfo[0].program)
    }, [])

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

        const updatedStudentLog = {
            studentID: studentID,
            firstName: firstName,
            lastName: lastName,
            program: program
        };

        const response = await Axios.post(
            "http://localhost:5000/updateStudent",
            updatedStudentLog
        )
        window.location.reload()
    }

    return (
        <>
            <button type="button" className="btn btn-outline-info m-2" onClick={handleShow}>Edit</button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Student</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form method='post'>
                        <div class="form-group">
                            <div class="col-auto">
                                <label htmlFor="firstName" class="col-form-label">First Name:</label>
                            </div>
                            <div class="col-auto">
                                <input
                                    value={firstName}
                                    name="firstName"
                                    type="text"
                                    id="firstName"
                                    class="form-control"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-auto">
                                <label htmlFor="lastName" class="col-form-label">Last Name:</label>
                            </div>
                            <div class="col-auto">
                                <input
                                    value={lastName}
                                    name="lastName"
                                    type="text"
                                    id="lastName"
                                    class="form-control"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div class="form-group mb-2">
                            <div class="col-auto">
                                <label htmlFor="program" class="col-form-label">Program:</label>
                            </div>
                            <div class="col-auto">
                                <input
                                    value={program}
                                    name="program"
                                    type="text"
                                    id="program"
                                    class="form-control"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>                       
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary">Finish</button> 

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditStudentPopUp;