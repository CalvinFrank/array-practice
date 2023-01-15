import { useState } from "react";
function Div() {
  const [sum, setSum] = useState(0);
  function handleSubmit(e) {
    e.preventDefault();
    setSum(Number(dNum1.value)/Number(dNum2.value));
  }
  return (
    <div className="mul">
      <p>Put in the two numbers you want to divide.</p>
      
      <form className="dForm">
        <input type="text" id="dNum1"/>
        <p className="divide">÷</p>
        <div className="dSubmitRow">
            <input type="text" id="dNum2"/>
            <button type="submit" className="dSubmitBtn" onClick={handleSubmit}>Submit</button>
        </div>
        <p className="dEqual">=</p>
        <p className="dSum">{sum}</p>
      </form>
    </div>
  );
}
  
  export default Div