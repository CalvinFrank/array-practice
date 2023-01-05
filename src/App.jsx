function App() {
  const url = "localhost:5173"
  return (
    <div className="App">
      <header className="header">
        <h1 className="header-h1" onClick={() => console.log("url:", url)}> Tables </h1>
        <h1 className="header-h1">addition</h1>
        <h1 className="header-h1">subtraction</h1>
        <h1 className="header-h1">multiplcation</h1>
        <h1 className="header-h1">division</h1>
      </header>
      <p className="intro">Hello and welcome to Tables©. this is a webpage that tells you diffrent kinds of tables.</p>
    </div>
  )
}

export default App
