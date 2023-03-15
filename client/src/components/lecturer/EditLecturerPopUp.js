import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios'

const EditLecturerPopUp = ({ lecturerInfo }) => {

    const [lecturerID, setLecturerID] = useState(0)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [department, setDepartment] = useState('')
    const [salary, setSalary] = useState('')

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setLecturerID(lecturerInfo[0].lecturerID)
        setFirstName(lecturerInfo[0].firstName)
        setLastName(lecturerInfo[0].lastName)
        setDepartment(lecturerInfo[0].department)
        setSalary(lecturerInfo[0].salary)

    }, [])

    const handleChange = (event) => {
        if (event.target.name === "firstName") {
            setFirstName(event.target.value)
        }
        else if (event.target.name === "lastName") {
            setLastName(event.target.value)
        }
        else if (event.target.name === "department") {
            setDepartment(event.target.value)
        }
        else if (event.target.name === "salary") {
            setSalary(event.target.value)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const lecturerLog = {
            lecturerID: lecturerID,
            firstName: firstName,
            lastName: lastName,
            department: department,
            salary: salary
        };

        const response = await Axios.post(
            "http://localhost:5000/updateLecturer",
            lecturerLog
        );

        setShow(false)
        window.location.reload()
    }

    return (
        <>
            <button type="button" className="btn btn-outline-info m-2" onClick={handleShow}>Edit</button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Lecturer</Modal.Title>
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
                                <label htmlFor="lastName" class="col-form-label">Last name:</label>
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
                                <label htmlFor="department" class="col-form-label">Department:</label>
                            </div>
                            <div class="col-auto">
                                <input
                                    value={department}
                                    name="department"
                                    type="text"
                                    id="department"
                                    class="form-control"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div class="form-group mb-2">
                            <div class="col-auto">
                                <label htmlFor="salary" class="col-form-label">Salary:</label>
                            </div>
                            <div class="col-auto">
                                <input
                                    value={salary}
                                    name="salary"
                                    type="text"
                                    id="salary"
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

export default EditLecturerPopUp;