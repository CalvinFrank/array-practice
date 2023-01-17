import { useState } from "react";
import Add from "./charts/add";
import Div from "./charts/div";
import Mul from "./charts/mul";
import Sub from "./charts/sub";
import Home from "./home";

function App() {
  const [selectedPage, setSelectedPage] = useState("calculator");

  let mainContent = <p></p>;

  switch (selectedPage) {
    case "calculator":
      mainContent = <Home />;
      break;
    case "add":
      mainContent = <Add />;
      break;
    case "sub":
      mainContent = <Sub />;
      break;
    case "mul":
      mainContent = <Mul />;
      break;
    case "div":
      mainContent = <Div />;
      break;
  }

  return (
    <div className="App">
      <header className="header">
        <h1 className="header-h1" onClick={() => setSelectedPage("calculator")}>Calculators©</h1>
        <h1 className="header-h1" onClick={() => setSelectedPage("add")}>Addition</h1>
        <h1 className="header-h1" onClick={() => setSelectedPage("sub")}>Subtraction</h1>
        <h1 className="header-h1" onClick={() => setSelectedPage("mul")}>Multiplication</h1>
        <h1 className="header-h1" onClick={() => setSelectedPage("div")}>Division</h1>
      </header>
      <p className="intro">
        Hello and welcome to Calculators©.  This app will help you with your calculations.
      </p>
      {mainContent}
    </div>
  );
}

export default App;
