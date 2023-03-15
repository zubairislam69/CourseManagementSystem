import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios'

const EditCoursePopUp = ({courseInfo }) => {

    const [courseID, setCourseID] = useState(0)
    const [courseCode, setCourseCode] = useState('')
    const [courseName, setCourseName] = useState('')
    const [lecturer, setLecturer] = useState('')
    const [department, setDepartment] = useState('')
    
    const [course, setCourse] = useState([])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setCourseID(courseInfo[0].courseID)
        setCourseCode(courseInfo[0].courseCode)
        setCourseName(courseInfo[0].courseName)
        setLecturer(courseInfo[0].lecturer)
        setDepartment(courseInfo[0].department)

    }, [])


    const handleChange = (event) => {

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

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedCourseLog = {
            courseID: courseID,
            courseCode: courseCode,
            courseName: courseName,
            lecturer: lecturer,
            department: department
           
        };

        const response = await Axios.post(
            "http://localhost:5000/updateCourse",
            updatedCourseLog
        );

        setShow(false)
        window.location.reload()
    }

    return (
        <>
            <button type="button" className="btn btn-outline-info m-2" onClick={handleShow}>Edit</button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form method='post'>
                        <div class="form-group">
                            <div class="col-auto">
                                <label htmlFor="courseCode" class="col-form-label">Course Code:</label>
                            </div>
                            <div class="col-auto">
                                <input
                                    value={courseCode}
                                    name="courseCode"
                                    type="text"
                                    id="courseCode"
                                    class="form-control"
                                    onChange={handleChange}
                                   />
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-auto">
                                <label htmlFor="courseName" class="col-form-label">Course Name:</label>
                            </div>
                            <div class="col-auto">
                                <input
                                    value={courseName}
                                    name="courseName"
                                    type="text"
                                    id="courseName"
                                    class="form-control"
                                    onChange={handleChange}
                                     />
                            </div>
                        </div>

                        <div class="form-group mb-2">
                            <div class="col-auto">
                                <label htmlFor="lecturer" class="col-form-label">Lecturer:</label>
                            </div>
                            <div class="col-auto">
                                <input
                                    value={lecturer}
                                    name="lecturer"
                                    type="text"
                                    id="lecturer"
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
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary">Finish</button> 
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditCoursePopUp;