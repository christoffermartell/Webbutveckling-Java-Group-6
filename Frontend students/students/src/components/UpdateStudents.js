import React from "react";

const UpdateStudents = (props) => {
	const clickHandler = () => {
		props.setView("startPage");
	};
	return (
		<div className="wrapper">
			<form>
				<h2 onClick={() => clickHandler()}>Här kan du ändra eller radera studenter</h2>
				<div>
					<span className="labelTextInSpan">
						<label>Name</label>
					</span>
					<input id="editName" type="text" />
				</div>

				<label>Last name</label>
				<input id="editlastName" type="text" />
			</form>
		</div>
	);
};

export default UpdateStudents;
