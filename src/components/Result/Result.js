import React, { useContext } from "react";
import { elements, PlayAgain, Message } from "../.";
import { ThreeWayContext } from "../../context";

const Result = () => {
  const { userChoice, compChoice } = useContext(ThreeWayContext);
  const uChoice = elements[userChoice + "E"];
  const cChoice = elements[compChoice + "E"];

  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}
    >
      <div>
        <Message/>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img src={uChoice} alt="rock" />
          <h6>User</h6>
        </div>
        <div style={{ width: "200px", margin: "auto" }}>
          <p>vs.</p>
          <PlayAgain />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img src={cChoice} alt="rock" />
          <h6>Computer</h6>
        </div>
      </div>
    </div>
  );
};

export default Result;
