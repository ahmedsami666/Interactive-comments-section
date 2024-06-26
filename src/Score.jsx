import React from "react"
const Score = (props) => {
    var [currentScore, setCurrentScore] = React.useState(props.score)
    const handlePlus = () => {
        setCurrentScore(currentScore + 1)
    }
    const handleMinus = () => {
        if (currentScore === 0) {
            setCurrentScore(0)
        }else{
            setCurrentScore(currentScore - 1)
        }
    }
    return (
        <div className="score">
            <img src="./images/icon-plus.svg" alt="plus" onClick={handlePlus}/>
            <span>
                {currentScore}
            </span>
            <img src="./images/icon-minus.svg" alt="minus" onClick={handleMinus}/>
        </div>
    )
}
export default Score