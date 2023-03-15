import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios'

const LecturersPopUp = () => {

    const [lecturerID, setLecturerID] = useState(0)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [department, setDepartment] = useState('')
    const [salary, setSalary] = useState('')

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
            firstName: firstName,
            lastName: lastName,
            department: department,
            salary: salary
        };

        const response = await Axios.post(
            "http://localhost:5000/addLecturer",
            lecturerLog
        );

        setShow(false)
        window.location.reload()
    }

    return (
        <>
            <button type="button" className="btn btn-outline-success btn-sm my-2" onClick={handleShow}>Add Lecturer</button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Lecturer</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form method='post'>                     
                        <div class="form-group">
                            <div class="col-auto">
                                <label htmlFor="firstName" class="col-form-label">First Name:</label>
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
                                <label htmlFor="lastName" class="col-form-label">Last Name:</label>
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
                                <label htmlFor="department" class="col-form-label">Department:</label>
                            </div>
                            <div class="col-auto">
                                <input 
                                    name="department"
                                    type="text" 
                                    id="department" 
                                    class="form-control"
                                    onChange={handleChange}/>
                            </div>
                        </div>

                        <div class="form-group mb-2">
                            <div class="col-auto">
                                <label htmlFor="salary" class="col-form-label">Salary:</label>
                            </div>
                            <div class="col-auto">
                                <input 
                                    name="salary"
                                    type="text" 
                                    id="salary"
                                    class="form-control"
                                    onChange={handleChange}/>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button type="submit" onClick={ handleSubmit} className="btn btn-primary">Add</button> 
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default LecturersPopUp;