import React from "react"
const Action = (props) => {
    const updateState = (e) => {
        var key = e.target.className
        props.setReply(prevState => {
            return {...prevState, [key]: true}
        })
    }
    const handleEdit = (e) => {
        var key = e.target.className
        props.setEdit(prevState => {
            return {...prevState, [key]: true}
        })
    }
    const handleDelete = (e) => {
        var key = e.target.className
        props.setIsPosted(prevState => {
            return {
                ...prevState, [key]: false
            }
        })
    }
    return (
        <React.Fragment>
        {props.currentUser === props.userName ?
            <div className="action-current-user">
                <div className="action delete">
                    <img src='./images/icon-delete.svg' alt="delete"/>
                    <span className={props.id} onClick={handleDelete}>Delete</span>
                </div>
                <div className="action">
                    <img src='./images/icon-edit.svg' alt="edit"/>
                    <span onClick={handleEdit} className={props.id}>Edit</span>
                </div>
            </div>:
            <div className="action">
                <img src='./images/icon-reply.svg' alt="reply"/>
                <span onClick={updateState} className={props.id}>Reply</span>
            </div>
        }
        </React.Fragment>
    )
}
export default Action