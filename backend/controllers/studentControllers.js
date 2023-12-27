const asyncHandler = require("express-async-handler");
const Student = require("../models/studentModel");

const studentData = asyncHandler(async (req, res) => {
    const { userId, studentName, studentRollno, studentMarks } = req.body;

    const studentdata = await Student.create({
        userId,
        studentName,
        studentRollno,
        studentMarks
    })
    if (studentdata) {
        res.status(201).json({
            _id: studentdata._id,
            userId: studentdata.userId,
            studentRollno: studentdata.studentRollno,
            studentName: studentdata.studentName,
            studentMarks: studentdata.studentMarks

        });
    }
    else {
        res.status(400);
        throw new Error("Error in receiving student data")
    }
})
const fetchStudentData = asyncHandler(async (req, res) => {
    const userId = req.body.userId;
    const sort = req.body.sort;
    if (!userId) {
        res.status(400);
        throw new Error("Please Enter all the Fields")
    }
    if (sort === "A-Z") {

        const studentData = await Student.find({ userId: userId }).sort({ studentName: 1 }).collation({ locale: "en", caseLevel: true });
        res.send(studentData);
    }
    if (sort === "by rollno") {

        const studentData = await Student.find({ userId: userId }).sort({ studentRollno: 1 }).collation({ locale: "en", numericOrdering: true });
        res.send(studentData);
    }


    else {
        res.status(401);
        throw new Error("Invalid error ara hai");

    }
})

const deleteStudent = asyncHandler(async (req, res) => {
    const { userId, studentRollno } = req.body;
    if (!userId || !studentRollno) {
        res.status(400);
        throw new Error("Please Enter all the Fields")
    }
    const deletedStudent = await Student.findOneAndDelete({ userId: userId, studentRollno: studentRollno })
    res.send(deletedStudent);


})

const update = asyncHandler(async (req, res) => {
    const { userId, studentRollno, studentName, studentMarks } = req.body;

    // if (userId || !studentName || !studentMarks) {
    //     res.status(400);
    //     throw new Error("Please Enter all the Fields")
    // }
    const updateStudent = await Student.findOneAndUpdate({ userId: userId, studentRollno: studentRollno },
        {
            studentName: studentName,
            studentMarks: studentMarks
        })
    res.send(updateStudent);
})


module.exports = { fetchStudentData, studentData, deleteStudent, update }