import React, {useState, useEffect} from "react";
import styled, { AnyStyledComponent } from "styled-components";
import ButtonCounter from "./Button";

const StartButton: AnyStyledComponent = styled.img`
  cursor: pointer;
`;

const Countdown: AnyStyledComponent = styled.div`
  color: red;
  font-size: 200px
`;


export default () => {
  const TIMER_LENGTH = 10;
  let timer_var: any;
  let timex = TIMER_LENGTH;
  const [started, setStarted] = useState(false);
  const [seconds, setSeconds] = useState(TIMER_LENGTH);
  const [time_out, setTime_out] = useState(false);
  const	over = <Countdown>IT'S OVER</Countdown>
  const spam = <div><ButtonCounter /><Countdown>{seconds}</Countdown></div>
  const begin = <StartButton src='https://media.discordapp.net/attachments/775466871058464799/777019881366224946/unknown.png' onClick = {Start} />
  
  function Start(){
    setStarted(true);
	timer_var = setInterval(Count, 1000);
  };

  function Count(){
	setSeconds((seconds) => seconds - 1);
	timex = timex-1;
	if (timex === 0)
	{
	  clearInterval(timer_var);
	  setStarted(false);
	  setTime_out(true);
	  timex = TIMER_LENGTH;
	};
  }
  
  return (
	<div>
	  {time_out?over:started?spam:begin}
	</div>
  );
};
