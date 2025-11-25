import React, { useState, useEffect } from 'react';

function AnalogClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  
  const hourAngle = (hours + minutes / 60) * 30;
  const minuteAngle = minutes * 6;
  const secondAngle = seconds * 6;

  return (
    <div style={{
      position: 'relative',
      width: '200px',
      height: '200px',
      border: '5px solid black',
      borderRadius: '50%',
      background: 'white',
      margin: '20px auto'
    }}>
      <div style={{
        position: 'absolute',
        width: '6px',
        height: '50px',
        background: 'black',
        top: '50px',
        left: '97px',
        transformOrigin: 'bottom center',
        transform: `rotate(${hourAngle}deg)`
      }} />
      <div style={{
        position: 'absolute',
        width: '4px',
        height: '70px',
        background: 'gray',
        top: '30px',
        left: '98px',
        transformOrigin: 'bottom center',
        transform: `rotate(${minuteAngle}deg)`
      }} />
      <div style={{
        position: 'absolute',
        width: '2px',
        height: '90px',
        background: 'red',
        top: '10px',
        left: '99px',
        transformOrigin: 'bottom center',
        transform: `rotate(${secondAngle}deg)`
      }} />
    </div>
  );
}

export default AnalogClock;
