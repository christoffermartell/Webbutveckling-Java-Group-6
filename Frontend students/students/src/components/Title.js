import React from "react";

const Title = (props) => {
	const clickHandler = () => {
		props.setView("editUpdate");
	};
	return (
		<>
			<header onClick={() => clickHandler()}>Kursnärvaro</header>
		</>
	);
};

export default Title;
