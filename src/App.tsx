import React from "react";
import "./App.css";
import styled, { AnyStyledComponent } from "styled-components";
import ButtonTimer from "./components/Timer";

const Example: AnyStyledComponent = styled.div`
  color: red;
`;


export default () => {
  
  return (
	<div>
	  <ButtonTimer />
	</div>
  );
};
