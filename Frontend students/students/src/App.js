import React, { useState, useEffect } from "react";
import Title from "./components/Title";
import UpdateStudents from "./components/UpdateStudents";

const App = () => {
	const [view, setView] = useState("startPage");

	switch (view) {
		case "editUpdate":
			return <UpdateStudents setView={setView} />;

		default:
			return (
				<div className="wrapper">
					<Title setView={setView} />
				</div>
			);
	}
};

export default App;
