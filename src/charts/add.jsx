import { useState } from "react";

function Add() {
    // const [num1, setNum1] = useState();
  const [sum, setSum] = useState(0);


  return (
    <div className="add">
      <p>put in the two numbers you want to add</p>
      <input type="text" id="num1"/>
      <p>+</p>
      <input type="text" id="num2"/>
      <button type="submit" onClick={() => setSum(Number(num1.value)+Number(num2.value))}>Submit</button>
      <br />
      {sum}
    </div>
  );
}

export default Add;
