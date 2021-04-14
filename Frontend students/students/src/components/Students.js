import React from "react";

const Students = (props) => {
	const students = props.students;
	// koden nedanför försökte jag göra efter hur jag hanterar URL i App metoderna, men kan ses över imorgon
	/*	const { name, lastName, age, present } = {
		name: students.name,
		lastName: students.last_name,
		age: students.age,
		present: students.present,
	};
*/
	const handleUpdatePresence = (e, student) => {
		const isChecked = e.target.checked;
		props.updatePresence(student, isChecked);
	};
	const linkHandler = (student) => {
		props.setSpecificStudent(student);
		props.setView("editUpdate");
	};

	return (
		<>
			<ul>
				{students.map((student, i) => {
					return (
						<li key={i}>
							<a href="#" onClick={() => linkHandler(student)}>
								{student.name} {student.last_name}{" "}
							</a>
							<button
								className="btn"
								onClick={() => props.deleteStudent(student)}
							>
								X
							</button>

							<label id="labelId" htmlFor={student.id}>
								<input
									className="input-checkbox"
									type="checkbox"
									defaultChecked={student.present}
									id={student.id}
									onChange={(e) => handleUpdatePresence(e, student)}
								></input>
								Present
							</label>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Students;
