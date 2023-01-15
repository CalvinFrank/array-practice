function Home() {
    const suggestions = []
    function suggest(e) {
        suggestions.push(suggestBox.value)
        console.log(...suggestions)
    }
    return (
        <div className="homediv">
            <p>Put your suggestions for calculators below!</p> 
            <div className="suggestions">
                <input type="text" id="suggestBox"/> 
                <button onClick={suggest}>Enter</button>
                <p>{...suggestions}</p>
            </div>
        </div>
    )
}
export default Home