import React from "react"
const Input = (props) => {
    var [inputValue, setInputValue] = React.useState(`${props.userName}`)
    const handleChange = (e) => {
        setInputValue(`${e.target.value}`)
        var key = e.target.className
        props.setInput(prevState => {
            return {
                ...prevState, [key]: `${e.target.value.slice(1)}`
            }
        })
    }
    const handleClick = (e) => {
        var key = e.target.className
        props.setIsPosted(prevState => {
            return {
                ...prevState, [key]: true
            }
        })
        props.setReply(prevState => {
            return {...prevState, [key]: false}
        })
    }
    return (
        <div className="input">
            <img src={props.userImg} alt="user-img"/>
            <input type="text" placeholder="Add a comment..." onChange={handleChange} value={inputValue} className={props.id}/>
            <button onClick={handleClick} className={props.id}>SEND</button>
        </div>
    )
}
export default Input