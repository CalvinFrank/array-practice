import { useState } from "react";

function Add() {
  // const [num1, setNum1] = useState();
  const [sum, setSum] = useState(0);
  function handleSubmit(e) {
    e.preventDefault();
    setSum(Number(aNum1.value)+Number(aNum2.value));
  }
  return (
    <div className="add">
      <p>Put in the two numbers you want to add.</p>
      
      <form className="aForm">
        <input type="text" id="aNum1"/>
        <p className="plus">+</p>
        <div className="aSubmitRow">
            <input type="text" id="aNum2"/>
            <button type="submit" className="aSubmitBtn" onClick={handleSubmit}>Submit</button>
        </div>
        <p className="aEqual">=</p>
        <p className="aSum">{sum}</p>
      </form>
    </div>
  );
}

export default Add;
