import React, { useState, useEffect } from "react";
import { ThreeWayContext } from "../context";
import { Rules, Score, ButtonsRPS, Result } from ".";

const Main = () => {
  const [score, setScore] = useState(0);
  const [userChoice, setUserChoice] = useState("");
  const [compChoice, setCompChoice] = useState("");
  const [outcome, setOutcome] = useState("wrong");
  const [info, setInfo] = useState("");
  const [smallInfo, setSmallInfo] = useState("")

  const getWinner = (user, comp) => {
    switch (user + "." + comp) {
      case "rock.rock":
      case "paper.paper":
      case "scissors.scissors":
        return "draw";
        break;
      case "rock.scissors":
      case "scissors.paper":
      case "paper.rock":
        return "won";
        break;
      case "scissors.rock":
      case "paper.scissors":
      case "rock.paper":
        return "lost";
        break;
      default:
        return "wrong";
    }
  };

  useEffect(() => {
    setOutcome(getWinner(userChoice, compChoice));
  }, [userChoice, compChoice]);


  const calculateScore =()=>{
    switch (outcome){
      case 'won':
        setScore((i)=>i+1);
        setInfo('You Win!');
        setSmallInfo(`${userChoice} beats ${compChoice}`);
        break;
      case 'lost':
        setScore((i)=>i-1);
        setInfo('You Lose!');
        setSmallInfo(`${compChoice} beats ${userChoice}`);
        break;
      default:
        setInfo('Tie!');
        setSmallInfo(` `);
        break;
    }
  }

  useEffect(() => {
    if (outcome!==''){
    calculateScore();}
  }, [outcome])

  const nextStep =()=>{
    setOutcome('wrong');
  }
  return (
    <ThreeWayContext.Provider
      value={{
        score,
        setScore,
        userChoice,
        setUserChoice,
        compChoice,
        setCompChoice,
        outcome, 
        setOutcome,
        info, setInfo,
        smallInfo, setSmallInfo,
        nextStep
      }}
    >
      <div style={{
          display: "flex",
          flexDirection: 'column',
          justifyContent: 'end',
          alignItems: "center",
          marginTop: "50px",
          marginBottom: "50px",
        }}>
      Rock, Paper, Scissors
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div style={{ width: "200px" }}>
          <Score />
        </div>
        <div style={{ width: "200px" }}></div>
        <div style={{ width: "200px" }}>
          <Rules />
        </div>
      </div>
      { (outcome==='wrong') ? <ButtonsRPS /> :
      <Result />}
      </div>
    </ThreeWayContext.Provider>
  );
};

export default Main;
