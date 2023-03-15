import {useState} from 'react'
import './App.css';
import { Route, Routes } from "react-router-dom"
import NavBar from './components/NavBar';
import Home from './components/Home';
import Courses from './components/course/Courses';
import Students from './components/student/Students';
import Lecturers from './components/lecturer/Lecturers';
import { CourseStudentListContext } from './CourseStudentListContext'

function App() {
  const [studentID, setStudentID] = useState(0)
  const [courses, setCourses] = useState([])
  const [registeredCourses, setRegisteredCourses] = useState([])

  return (
    <div>
      <NavBar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/courses" element={
          <CourseStudentListContext.Provider value={{ studentID, setStudentID, courses, setCourses }}>
              <Courses />
            </CourseStudentListContext.Provider>
          } />
        <Route path="/students" element={
          <CourseStudentListContext.Provider value={{
            studentID, setStudentID, courses,
            setCourses, registeredCourses, setRegisteredCourses
          }}>
            <Students />
          </CourseStudentListContext.Provider>
          } />
        <Route path="/lecturers" element={<Lecturers />} />

      </Routes>
    </div>
  );
}

export default App;
