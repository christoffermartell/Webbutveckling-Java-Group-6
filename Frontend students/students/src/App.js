import React, { useState, useEffect } from "react";
import CreateStudent from "./components/CreateStudent";
import Students from "./components/Students";
import Title from "./components/Title";
import UpdateStudents from "./components/UpdateStudents";

const App = () => {
	const [view, setView] = useState("startPage");
	const [students, setStudents] = useState([]);

	const studentsUrl = 'http://localhost:8080/students';

	const deleteStudent = async (student) => {
		const response = await fetch(`http://localhost:8080/students/${student.student_id}`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
		})

		if (response.ok) {
			setStudents(prevStudents => {
				return prevStudents.filter(prevStudent => prevStudent.student_id !== student.student_id);
			})
		}
	}

	const updatePresence = async (student) => {
		const response = await fetch(`http://localhost:8080/students/${student.student_id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				present: !student.present
			})
		})

		if (response.ok) {
			console.log("Presence successfully changed.");
		}
	}

	useEffect(() => {
		const fetchStudents = async () => {
			const response = await fetch(studentsUrl);
			const students = await response.json();
			setStudents(students);
		}
		fetchStudents();
	}, [])

	switch (view) {
		case "editUpdate":
			return <UpdateStudents setView={setView} />;

		default:
			return (
				<div className="wrapper">
					<Title setView={setView} />
					<Students students={students} deleteStudent={deleteStudent} updatePresence={updatePresence} />
					<CreateStudent studentsUrl={studentsUrl} setStudents={setStudents} />
				</div>
			);
	}
};

export default App;
