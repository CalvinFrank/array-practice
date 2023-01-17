import { useState } from "react";
function Mul() {
  const [sum, setSum] = useState(0);
  function handleSubmit(e) {
    e.preventDefault();
    setSum(Number(mNum1.value)*Number(mNum2.value));
  }
  return (
    <div className="mul">
      <p>Put in the two numbers you want to multiply.</p>
      
      <form className="mForm">
        <input type="text" id="mNum1"/>
        <p className="times">×</p>
        <div className="mSubmitRow">
            <input type="text" id="mNum2"/>
            <button type="submit" className="mSubmitBtn" onClick={handleSubmit}>Submit</button>
        </div>
        <p className="mEqual">=</p>
        <p className="mSum">{sum}</p>
      </form>
    </div>
  );
  }
  
  export default Mul