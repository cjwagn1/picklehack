import React from "react";
import "./App.css";
import styled, { AnyStyledComponent } from "styled-components";
import ButtonTimer from "./components/Timer";

const WebsiteHeader: AnyStyledComponent = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

const HeaderText: AnyStyledComponent = styled.div`
  text-align: center;
  font-size: 50px;
`;

const WebsiteFooter: AnyStyledComponent = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;


export default () => {
  return (
	<div>
	  <WebsiteHeader src='https://media.discordapp.net/attachments/775466871058464799/776985933274152990/unknown.png' />
	  <HeaderText>Ever wondered your click speed?</HeaderText>
	  <ButtonTimer />
	  <WebsiteFooter src='https://media.discordapp.net/attachments/775466871058464799/776988744267988992/unknown.png' />
	</div>
  );
};
