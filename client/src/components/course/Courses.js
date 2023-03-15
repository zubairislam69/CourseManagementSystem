import React, { useState, useEffect, useContext } from 'react';
import Table from 'react-bootstrap/Table'
import AddCoursesPopUp from './AddCoursesPopUp';
import CourseDetailPopUp from './CourseDetailPopUp'
import Axios from 'axios'
import {useNavigate } from 'react-router-dom';
import EditCoursePopUp from './EditCoursePopUp';
import { CourseStudentListContext } from '../../CourseStudentListContext';

const Courses = () => {
    const navigate = useNavigate()
    const [course, setCourse] = useState([])
    const { studentID, setStudentID, courses, setCourses } = useContext(CourseStudentListContext) 

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

    const deleteEmployee = async (courseID) => {
        const sendCourseID = {courseID: courseID}
        const response = await Axios.post(
            "http://localhost:5000/deleteCourse",
            sendCourseID
        );
        return setCourse([...course.filter((item) => item.courseID !== courseID)]);
    }
    
    const renderRow = () => {
        const rows = course.map((item) => {
            const checkCourseID = course.filter((course) => {
                return course.courseID === item.courseID
            })

            return (
                <tr key={item.courseID}>
                <td>{item.courseID}</td>
                <td>{item.courseCode}</td>
                <td>{item.courseName}</td>
                <td>{item.lecturer}</td>
                <td>{item.department}</td>
                
                <td>
                        <CourseDetailPopUp         
                            courseInfo={checkCourseID}    
                            studentID={studentID}
                            setStudentID={setStudentID}
                            courses={courses}
                            setCourses={setCourses}    
                        />
                        
                    <EditCoursePopUp courseID={item.courseID} courseInfo={checkCourseID} />
                    <button type="button" className="btn btn-outline-danger m-2" onClick={() => deleteEmployee(item.courseID)}>Remove</button>
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
                        <th>Lecturer</th>
                        <th>Department</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </Table>
        )
    }

    /* -------------------------------------------------------------------------------------------------------------------------------- */

    return (
        <div className='container'>
            <div className='my-5'>
                <AddCoursesPopUp />

                {renderRow()}
            </div>
        </div>
    );
};

export default Courses;