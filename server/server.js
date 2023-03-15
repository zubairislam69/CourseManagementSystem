const express = require('express')
const db = require('./dbConfig')
const mysql = require('mysql')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors());
app.use(express.json())


app.post('/addCourse', (req, res) => {
    const courseID = null
    const courseCode = req.body.courseCode
    const courseName = req.body.courseName
    const lecturer = req.body.lecturer
    const department = req.body.department

    db.query(
        `INSERT INTO course VALUES (?, ?, ?, ?, ?)`, [courseID, courseCode, courseName, lecturer, department],
        (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        })
})

app.post('/deleteCourse', (req, res) => {
    const courseID = req.body.courseID
    db.query(
        `DELETE FROM course WHERE courseID = ?`, [courseID],
        (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        })
})

app.post('/getCourse', (req, res) => {
    db.query(
        `SELECT * FROM course`,
        (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        })
})

app.post('/updateCourse', (req, res) => {
    const courseID = req.body.courseID
    const courseCode = req.body.courseCode
    const courseName = req.body.courseName
    const lecturer = req.body.lecturer
    const department = req.body.department


    db.query(
        `UPDATE course SET courseCode = ? WHERE courseID = ?`, [courseCode, courseID],
        (err, result) => {
            if (err) {
                console.log(err)
            }
        })

    db.query(
        `UPDATE course SET courseName = ? WHERE courseID = ?`, [courseName, courseID],
        (err, result) => {
            if (err) {
                console.log(err)
            }
        })

    db.query(
        `UPDATE course SET lecturer = ? WHERE courseID = ?`, [lecturer, courseID],
        (err, result) => {
            if (err) {
                console.log(err)
            }
        })

    db.query(
        `UPDATE course SET department = ? WHERE courseID = ?`, [department, courseID],
        (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)

        })
})


app.post('/addStudent', (req, res) => {
    const studentID = null
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const program = req.body.program

    db.query(
        `INSERT INTO student VALUES (?, ?, ?, ?)`, [studentID, firstName, lastName, program],
        (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        })
})

app.post('/deleteStudent', (req, res) => {
    const studentID = req.body.studentID
    db.query(
        `DELETE FROM student WHERE studentID = ?`, [studentID],
        (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        })
})
app.post('/getStudent', (req, res) => {
    db.query(
        `SELECT * FROM student`,
        (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        })
})

app.post('/updateStudent', (req, res) => {
    const studentID = req.body.studentID
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const program = req.body.program

    db.query(
        `UPDATE student SET firstName = ? WHERE studentID = ?`, [firstName, studentID], 
        (err, result) => {
            if (err) {
                console.log(err)
            }
        })
    
    db.query(
        `UPDATE student SET lastName = ? WHERE studentID = ?`, [lastName, studentID],
        (err, result) => {
            if (err) {
                console.log(err)
            }
        })
    
    db.query(
        `UPDATE student SET program = ? WHERE studentID = ?`, [program, studentID],
        (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        })
})



app.post('/addLecturer', (req, res) => {
    const lecturerID = null
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const department = req.body.department
    const salary = req.body.salary

    db.query(
        `INSERT INTO lecturer VALUES (?, ?, ?, ?, ?)`, [lecturerID, firstName, lastName, department, salary],
        (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        })
})

app.post('/deleteLecturer', (req, res) => {
    const lecturerID = req.body.lecturerID
    db.query(
        `DELETE FROM lecturer WHERE lecturerID = ?`, [lecturerID],
        (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        })
})

app.post('/getLecturer', (req, res) => {
    db.query(
        `SELECT * FROM lecturer`,
        (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        })
})

app.post('/updateLecturer', (req, res) => {
    const lecturerID = req.body.lecturerID
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const department = req.body.department
    const salary = req.body.salary


    db.query(
        `UPDATE lecturer SET firstName = ? WHERE lecturerID = ?`, [firstName, lecturerID],
        (err, result) => {
            if (err) {
                console.log(err)
            }
        })

    db.query(
        `UPDATE lecturer SET lastName = ? WHERE lecturerID = ?`, [lastName, lecturerID],
        (err, result) => {
            if (err) {
                console.log(err)
            }
        })

    db.query(
        `UPDATE lecturer SET department = ? WHERE lecturerID = ?`, [department, lecturerID],
        (err, result) => {
            if (err) {
                console.log(err)
            }
        })
    
    db.query(
        `UPDATE lecturer SET salary = ? WHERE lecturerID = ?`, [salary, lecturerID],
        (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)

        })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})