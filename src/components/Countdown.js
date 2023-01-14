import React from 'react';

const firstSprint = new Date('01/04/2023');
const secondSprint = new Date('01/25/2023');
const thirdSprint = new Date('02/08/2023');
const fourthSprint = new Date('02/22/2023');
const fifthSprint = new Date('03/08/2023');
const sixthSprint = new Date('03/22/2023');

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24; // milliseconds

function Countdown() {
  const [days, setDays] = React.useState('');
  const [hours, setHours] = React.useState('');
  const [minutes, setMinutes] = React.useState('');
  const [seconds, setSeconds] = React.useState('');

  function sprintCountDown(sprint) {
    const today = new Date();
    const timeSpan = sprint - today;
  }

  return (
    <div>
      <h1>{days} Days {hours} Hours {minutes} Minutes {seconds} Seconds</h1>
    </div>
  )
}

export default Countdown;
