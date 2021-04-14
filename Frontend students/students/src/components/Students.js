import React from "react";

const Students = (props) => {
	const students = props.students;
	console.log(students);

	const handleUpdatePresence = (e, student) => {
		const isChecked = e.target.checked;
		props.updatePresence(student, isChecked);
	}

	return (
		<>
			<ul>
				{students.map((student, i) => {
					return (
						<li key={i}>
							<p>
								{student.name} {student.last_name}{" "}
								<button
									className="btn"
									onClick={() => props.deleteStudent(student)}
								>
									X
								</button>
							</p>
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
