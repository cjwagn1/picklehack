import React, {useState, useEffect} from "react";
import styled, { AnyStyledComponent } from "styled-components";

const StartButton: AnyStyledComponent = styled.img`
  cursor: pointer;
`;

const SpamButton: AnyStyledComponent = styled.img`
  cursor: pointer;
`;

const ResetButton: AnyStyledComponent = styled.img`
  cursor: pointer;
`;

const Countdown: AnyStyledComponent = styled.div`
  color: red;
  font-size: 100px;
`;

const GameOverText: AnyStyledComponent = styled.div`
  color: red;
  font-size: 80px;
`;

export default () => {
  const TIMER_LENGTH = 10;
  let timer_var: any;
  let timex = TIMER_LENGTH;
  const [started, setStarted] = useState(false);
  const [seconds, setSeconds] = useState(TIMER_LENGTH);
  const [time_out, setTime_out] = useState(false);
  const [counter, setCounter] = useState(0);
  const begin = <div><StartButton src='https://media.discordapp.net/attachments/775466871058464799/777310752356433970/unknown.png' onClick = {Start} /><Countdown>Timer: {seconds}s</Countdown></div>
  const spam = <div><SpamButton src='https://media.discordapp.net/attachments/775466871058464799/777310820614275113/unknown.png' onClick={SpamClick} /><Countdown>Timer: {seconds}s</Countdown></div>
  const	over = <div><GameOverText>Game Over!<br/>Your score was: {counter}<br/>Your clicking speed is {counter / TIMER_LENGTH} clicks per second</GameOverText><ResetButton src='https://media.discordapp.net/attachments/775466871058464799/777310877241704448/unknown.png' onClick = {Reset} /></div>
  
  function Start(){
    setStarted(true);
	timer_var = setInterval(Count, 1000);
  };

  function SpamClick(){
  setCounter(counter + 1);
  //alert(counter);
  };

  function Reset(){
    clearInterval(timer_var);
	setSeconds(TIMER_LENGTH);
	timex = TIMER_LENGTH;
	setCounter(0);
	setStarted(false);
	setTime_out(false);
  }

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
