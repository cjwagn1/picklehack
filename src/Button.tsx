import React, { useState } from "react";
import styled, { AnyStyledComponent } from "styled-components";

const ButtonCounter: AnyStyledComponent = styled.img`
	cursor: pointer;
`;

export default () => {
	const [counter, setCounter] = useState(0);

	function buttonClick() {
		setCounter(counter + 1);
		alert(counter);
	}

	return (
		<div>
			<ButtonCounter
				src="https://media.discordapp.net/attachments/775466871058464799/776985933274152990/unknown.png"
				onClick={buttonClick}
			/>
		</div>
	);
};
