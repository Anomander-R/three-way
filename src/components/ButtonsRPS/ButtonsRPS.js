import React, { Fragment, useState, useContext } from "react";
import { ThreeWayContext } from "../../context";
import { elements, BoxButton } from "../.";

const ButtonsRPS = () => {
  const weapons = ['rock', 'paper', 'scissors'];
  const [state, setState] = useState(0);
  const { setUserChoice, setCompChoice } = useContext(ThreeWayContext);

  const getComputerChoice = ()=>{
    const rnd = Math.floor(Math.random()*3);
    return weapons[rnd];
  }

  const handleClick = (event) => {
    setUserChoice(event.target.name);
    setCompChoice(getComputerChoice());
  };
  return (
    <Fragment>
      <div style={{ display: "flex", marginTop: "150px", marginBottom: "20px" }}>
        <BoxButton 
        id="rock"
        onClick={handleClick}>
          <img
            src={elements.rock}
            style={{ width: "200px" }}
            alt="rock"
            name="rock"
            onMouseOver={(e) => (e.currentTarget.src = `${elements.rockA}`)}
            onMouseOut={(e) => (e.currentTarget.src = `${elements.rock}`)}
          />
          ROCK
        </BoxButton>
        <BoxButton
          id="paper"
          onClick={handleClick}
        >
          <img
            src={elements.paper}
            alt="paper"
            style={{ width: "200px" }}
            name="paper"
            onMouseOver={(e) => (e.currentTarget.src = `${elements.paperA}`)}
            onMouseOut={(e) => (e.currentTarget.src = `${elements.paper}`)}
          />
          PAPER
        </BoxButton>
        <BoxButton 
          id="scissors"
          onClick={handleClick}
        >
          <img
            src={elements.scissors}
            alt="scissors"
            style={{ width: "200px" }}
            name="scissors"
            onMouseOver={(e) => (e.currentTarget.src = `${elements.scissorsA}`)}
            onMouseOut={(e) => (e.currentTarget.src = `${elements.scissors}`)}
          />
          SCISSORS
        </BoxButton>
        

      </div>
    </Fragment>
  );
};

export default ButtonsRPS;
