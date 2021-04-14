import React, { useState } from "react";

const CreateStudent = (props) => {
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [age, setAge] = useState(5);
	const [checked, setChecked] = useState(false);

	const submitHandler = (e) => {
		e.preventDefault();
		const createStudent = async () => {
			const response = await fetch(props.studentsUrl, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: name,
					last_name: lastName,
					age: age,
					present: checked,
				}),
			});
			if (response.status !== 201) {
				console.error(
					"Something went wrong. Please make sure the values you entered are valid."
				);
			}
			const createdStudent = await response.json();
			props.setStudents((prevStudents) => [...prevStudents, createdStudent]);
		};

		createStudent();
	};

	return (
		<>
			<form onSubmit={submitHandler}>
				<h3 className="form-title">Create student</h3>
				<div className="divCreateStudent">
					<label htmlFor="name">
						First name
						<input
							type="text"
							id="name"
							name="name"
							required="required"
							placeholder="First name"
							onChange={(e) => setName(e.target.value)}
							value={name}
						></input>
					</label>
				</div>
				<div className="divCreateStudent">
					<label htmlFor="last_name">
						Last name{" "}
						<input
							type="text"
							id="last_name"
							name="last_name"
							required="required"
							placeholder="Last name"
							onChange={(e) => setLastName(e.target.value)}
							value={lastName}
						></input>
					</label>
				</div>
				<div className="divCreateStudent">
					<label htmlFor="age">
						Age
						<input
							type="number"
							id="age"
							name="age"
							required="required"
							min="5"
							placeholder="Age"
							onChange={(e) => setAge(e.target.value)}
							value={age}
						></input>
					</label>
				</div>

				<label htmlFor="present">Present</label>
				<input
					type="checkbox"
					id="present"
					name="present"
					onChange={(e) => setChecked(!checked)}
					value={checked}
				></input>

				<button className="btn" type="submit">
					Save
				</button>
			</form>
		</>
	);
};

export default CreateStudent;
