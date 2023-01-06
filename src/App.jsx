import { useState } from 'react';
import Add from "./charts/add"
import Div from "./charts/div"
import Mul from "./charts/mul"
import Sub from "./charts/sub"
import Home from './home';

function App() {
  const [selectedPage, setSelectedPage] = useState('tables');

  let mainContent = ( <p>This is the main content</p> );

  switch(selectedPage) {
    case 'tables':
      mainContent = <Home />;
      break;
    case 'add':
      mainContent = <Add />;
      break;
    case 'sub':
      mainContent = <Sub />;
      break;
    case 'mul':
      mainContent = <Mul />;
      break;
    case 'div':
      mainContent = <Div />;
      break;
  }

  const url = "localhost:5173";
  return (
    <div className="App">
      <header className="header">
        <h1 className="header-h1" onClick={() => setSelectedPage('tables')}> Tables </h1>
        <h1 className="header-h1" onClick={() => setSelectedPage('add')}>addition</h1>
        <h1 className="header-h1" onClick={() => setSelectedPage('sub')}>subtraction</h1>
        <h1 className="header-h1" onClick={() => setSelectedPage('mul')}>multiplication</h1>
        <h1 className="header-h1" onClick={() => setSelectedPage('div')}>division</h1>
      </header>
      <p className="intro">Hello and welcome to Tables©. this is a webpage that tells you diffrent kinds of tables.</p>
      { mainContent }
    </div>
  )
}

export default App
