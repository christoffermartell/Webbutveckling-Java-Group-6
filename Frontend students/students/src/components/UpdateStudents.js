import React from "react";

const UpdateStudents = () => {
	return (
		<div className="wrapper">
			<form>
				<h2>Här kan du ändra eller radera studenter</h2>
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
