import Action from "./Action"
import Avatar from "./Avatar"
import React from "react"

const Header = (props) => {
    return (
        <div className="header">
                {window.innerWidth < 768 ?
                <Avatar 
                currentUser={props.currentUser}
                userName={props.userName}
                userImg={props.userImg}
                date={props.date}
                />
                :
                <React.Fragment>
                <Avatar 
                currentUser={props.currentUser}
                userName={props.userName}
                userImg={props.userImg}
                date={props.date}
                />

                <Action 
                currentUser={props.currentUser}
                userName={props.userName}
                id={props.id}
                setReply={props.setReply}
                setEdit={props.setEdit}
                setIsPosted={props.setIsPosted}
                />
                </React.Fragment>
                }
        </div>
    )
}
export default Header