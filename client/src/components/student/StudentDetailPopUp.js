import React, { useState, useEffect }  from 'react';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table'

import Axios from 'axios'

const StudentDetailPopUp = ({ studentInfo, setStudentID, setCourses }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [course, setCourse] = useState([])
    const [registeredCourses, setRegisteredCourses] = useState([])
    const [studentIDToSend, setStudentIDToSend] = useState()
    
    useEffect(() => {
        Axios.post('http://localhost:5000/getCourse').then((response) => {
            response.data.map((item) => {
                setCourse((prevState) => [...prevState, {
                    courseID: item.courseID,
                    courseCode: item.courseCode,
                    courseName: item.courseName,
                    lecturer: item.lecturer,
                    department: item.department
                }])
            })
        }).catch(error => {
            console.log(error.response)
        });
    }, [])

    const handleClick = (courseID) => {
        const registerForCourse = course.filter(course => courseID === course.courseID)
        registerForCourse[0].studentID = studentInfo[0].studentID
        registerForCourse[0].firstName = studentInfo[0].firstName
        registerForCourse[0].lastName = studentInfo[0].lastName

        setRegisteredCourses((prevState) => prevState.concat(registerForCourse))
        setStudentIDToSend(studentInfo[0].studentID)
        setCourses((prevState) => prevState.concat(registerForCourse))  
        setStudentID(studentInfo[0].studentID)
    }

    const renderRow = () => {
        const rows = registeredCourses.map((item) => {
           
            return (
                <tr key={item.courseID}>
                    <td>{item.courseID}</td>
                    <td>{item.courseCode}</td>
                    <td>{item.courseName}</td>
                    <td>
                        <button type="button" className="btn btn-outline-danger m-2">Unregister</button>
                    </td>
                </tr>
            );
        });

        return (
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Course ID</th>
                        <th>Course Code</th>
                        <th>Course Name</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </Table>
        )
    }

    return (     
        <>
        <button type="button" className="btn btn-outline-dark m-2" onClick={handleShow}>Details</button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Courses</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="btn-group">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Add Course
                        </button>
                        <div class="dropdown-menu">
                            {course.map((item) => {
                                return (
                                    <a class="dropdown-item" onClick={() => handleClick(item.courseID)} href="#">{item.courseName}</a>
                                )
                            }) }
                        </div>
                    </div>
                    <div className='container'>
                        <div className='my-5'>
                            {renderRow()}
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default StudentDetailPopUp;