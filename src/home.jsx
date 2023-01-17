import { useState } from "react"
function Home() {
    const [suggestions, setSuggestions] = useState([])
    
    function suggest() {
        setSuggestions([...suggestions, suggestBox.value])
    }
    const suggestionElements = suggestions.map((suggestion) => {
        return <p>{suggestion}</p>
    })
    return (
        <div className="homediv">
            <p>Put your suggestions for calculators below!</p> 
            <div className="suggestions">
                <input type="text" id="suggestBox"/> 
                <button onClick={suggest}>Enter</button>
                <p className="note">*Note: This will not save.</p>
                <div>{...suggestionElements}</div>
            </div>
        </div>
    )
}
export default Home