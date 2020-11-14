import React, { useState, useEffect } from "react";
import "./App.css";
import styled, { AnyStyledComponent } from "styled-components";
import Test from "./components/dataCollection";

const Example: AnyStyledComponent = styled.div`
	color: red;
`;

export default () => {
	return <Test></Test>;
};
