import { useState } from "react";
function Sub() {
  const [sum, setSum] = useState(0);
  function handleSubmit(e) {
    e.preventDefault();
    setSum(Number(sNum1.value)-Number(sNum2.value));
  }
  return (
    <div className="sub">
      <p>Put in the two numbers you want to subtract.</p>
      
      <form className="sForm">
        <input type="text" id="sNum1"/>
        <p className="minus">-</p>
        <div className="sSubmitRow">
            <input type="text" id="sNum2"/>
            <button type="submit" className="sSubmitBtn" onClick={handleSubmit}>Submit</button>
        </div>
        <p className="sEqual">=</p>
        <p className="sSum">{sum}</p>
      </form>
    </div>
  );
  }
  
  export default Sub