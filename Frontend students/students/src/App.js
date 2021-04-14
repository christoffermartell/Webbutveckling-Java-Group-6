import React, { useState, useEffect } from "react";
import CreateStudent from "./components/CreateStudent";
import Students from "./components/Students";
import Title from "./components/Title";
import UpdateStudents from "./components/UpdateStudents";

const App = () => {
	const [view, setView] = useState("startPage");
	const [students, setStudents] = useState([]);
	const [specificStudent, setSpecificStudent] = useState({});

	const studentsUrl = "http://localhost:8080/students";

	useEffect(() => {
		const fetchStudents = async () => {
			const response = await fetch(studentsUrl);
			const students = await response.json();
			setStudents(students);
		};
		fetchStudents();
	}, [students]);

	const deleteStudent = async (student) => {
		const response = await fetch(
			`http://localhost:8080/students/${student.student_id}`,
			{
				method: "DELETE",
				headers: { "Content-Type": "application/json" },
			}
		);

		if (response.ok) {
			setStudents((prevStudents) => {
				return prevStudents.filter(
					(prevStudent) => prevStudent !== student.student_id
				);
			});
		}
	};

	const deleteStudentInEdit = async (studentId) => {
		const response = await fetch(
			`http://localhost:8080/students/${studentId}`,
			{
				method: "DELETE",
				headers: { "Content-Type": "application/json" },
			}
		);

		if (response.ok) {
			setStudents((prevStudents) => {
				return prevStudents.filter((prevStudent) => prevStudent !== studentId);
			});
		}
	};

	const updatePresence = async (student, isChecked) => {
		const response = await fetch(
			`http://localhost:8080/students/${student.student_id}`,
			{
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					present: isChecked,
				}),
			}
		);

		if (response.ok) {
			console.log("Presence successfully changed.");
		}
	};

	const updateStudent = async (studentId, name, lastName, age, present) => {
		const response = await fetch(
			`http://localhost:8080/students/${studentId}`,
			{
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: name,
					last_name: lastName,
					age: age,
					present: present,
				}),
			}
		);
		if (response.ok) {
			console.log("student successfully changed.");
		}
	};

	switch (view) {
		case "editUpdate":
			return (
				<UpdateStudents
					setView={setView}
					specificStudent={specificStudent}
					deleteStudentInEdit={deleteStudentInEdit}
					updateStudent={updateStudent}
				/>
			);

		default:
			return (
				<div className="wrapper">
					<Title setView={setView} />
					<Students
						students={students}
						deleteStudent={deleteStudent}
						updatePresence={updatePresence}
						setSpecificStudent={setSpecificStudent}
						setView={setView}
					/>
					<CreateStudent studentsUrl={studentsUrl} setStudents={setStudents} />
				</div>
			);
	}
};

export default App;
