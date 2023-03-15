import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom';

const CoursesPopUp = () => {
    const navigate = useNavigate()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [courseCode, setCourseCode] = useState('')
    const [courseName, setCourseName] = useState('')
    const [lecturer, setLecturer] = useState('')
    const [department, setDepartment] = useState('')

    const handleChange =  (event) => {
        console.log('value is:', event.target.name);
        console.log('value is:', event.target.value);

        if (event.target.name === "courseCode") {
            setCourseCode(event.target.value)
        }

        else if (event.target.name === "courseName") {
            setCourseName(event.target.value)
        }

        else if (event.target.name === "lecturer") {
            setLecturer(event.target.value)
        }

        else if (event.target.name === "department") {
            setDepartment(event.target.value)
        }  
    };

    const handleSubmit =  async (e) => {
        e.preventDefault();

        const courseLog = {
            courseCode: courseCode, courseName: courseName,
            lecturer: lecturer,
            department: department
        };

        const response = await Axios.post(
            "http://localhost:5000/addCourse",
            courseLog
        );

        setShow(false)
        window.location.reload()
    }


    return (
        <>
            <button type="button" className="btn btn-outline-success btn-sm my-2" onClick={handleShow}>Add Course</button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form >
                        <div class="form-group">
                            <div class="col-auto">
                                <label htmlFor="courseCode" class="col-form-label">Course Code:</label>
                            </div>
                            <div class="col-auto">
                                <input 
                                    type="text"
                                    name="courseCode"
                                    id="courseCode"
                                    class="form-control"
                                    onChange={handleChange } />
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-auto">
                                <label htmlFor="courseName" class="col-form-label">Course Name:</label>
                            </div>
                            <div class="col-auto">
                                <input 
                                    name="courseName"
                                    type="text" 
                                    id="courseName" 
                                    class="form-control"
                                    onChange={handleChange}/>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-auto">
                                <label htmlFor="lecturer" class="col-form-label">Lecturer:</label>
                            </div>
                            <div class="col-auto">
                                <input 
                                    name="lecturer"
                                    type="text" 
                                    id="lecturer" 
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
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Add</button> 
                    </form>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CoursesPopUp;