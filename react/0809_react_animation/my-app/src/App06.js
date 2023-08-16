import React from 'react';
// styled components와 keyframes를 가져오기
import styled, { keyframes } from 'styled-components';
import './App06.css'

const Eyes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Eye = styled.div`
  width: 200px;
  height: 200px;
  border: 20px solid #212F3D;
  border-radius: 50%;
  position: relative;
  background-color: #FCFCFC;
`

const moving = keyframes`
  from {
    top: 40%;
    left: 10%;
  }
  to {
    top: 40%;
    left: 70%;
  }
`

const rollingColor = keyframes`
  from {
    top: 40%;
    left: 10%;
  }
  25% {
    background-color: #F1C40F;
    top: 20%;
    left: 20%;
  }
  50% {
    background-color: #0FDBDB;
    top: 10%;
    left: 25%;
  }
  75% {
    background-color: #C9EDED;
    top: 20%;
    left: 30%;
  }
  100% {
    background-color: #D5D8DC;
    top: 40%;
    left: 40%;
  }
`

const Pupil = styled.div`
  width: 100px;
  height: 100px;
  background-color: brown;
  border-radius: 50%;
  position: absolute;
  animation: ${rollingColor} 3s 0s linear alternate infinite;
`
 // speed 3s, no delay, linear acceleration, alternate direction, infinite loop

function App() {
  return (
    <Eyes>
      <Eye className="left_eye"><Pupil /></Eye>
      <Eye className="right_eye"><Pupil /></Eye>
    </Eyes>
  );
}

export default App