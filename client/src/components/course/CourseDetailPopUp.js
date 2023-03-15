import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios'
import Table from 'react-bootstrap/Table'

const CourseDetailPopUp = ({ courseInfo, courses }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [student, setStudent] = useState([])

    useEffect(() => {
        Axios.post('http://localhost:5000/getStudent').then((response) => {
            response.data.map((item) => {
                setStudent((prevState) => [...prevState, {
                    studentID: item.studentID,
                    firstName: item.firstName,
                    lastName: item.lastName,
                    program: item.program
                }])
            })
        }).catch(error => {
            console.log(error.response)
        });
    }, [])

    const checkStudentID = courses.filter((course) => {
        return course.courseID == courseInfo[0].courseID
    })

    const getStudentInCourse = checkStudentID.filter((course) => {
        return course.studentID
    })

    const renderRow = () => {
        const rows = getStudentInCourse.map((item) => {
            const checkcourseID = courses.filter((course) => {
                return course.courseID === item.courseID
            })

            return (
                <tr key={item.studentID}>
                    <td>{item.studentID}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>
                        <button type="button" className="btn btn-outline-danger m-2" >Remove</button>
                    </td>
                </tr>
            );
        });

        return (
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
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
                    <Modal.Title>Course Details</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <p>Student List</p>

                    <div className='container'>
                        <div className='my-5'>
                            {renderRow()}
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default CourseDetailPopUp;