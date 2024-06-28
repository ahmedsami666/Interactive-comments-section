import Score from './Score'
import Header from './Header'
import React from 'react'
import Action from './Action'

const CommentCard = (props) => {
    return (
        <div className="card">
            {window.innerWidth < 768 ? 
            <React.Fragment>
                <Header 
                userImg={props.userImg}
                userName={props.userName}
                date={props.date}
                currentUser={props.currentUser}
                setReply={props.setReply}
                isReply={props.isReply}
                id={props.id}
                />
                <p>
                    {props.comment}
                </p>
                <Score score={props.score}/>
                <Action 
                currentUser={props.currentUser}
                userName={props.userName}
                id={props.id}
                setReply={props.setReply}
                setEdit={props.setEdit}
                setIsPosted={props.setIsPosted}
                />
            </React.Fragment>
            : 
            <React.Fragment>
            <Score score={props.score}/>
            <div className="content">
                <Header 
                userImg={props.userImg}
                userName={props.userName}
                date={props.date}
                currentUser={props.currentUser}
                setReply={props.setReply}
                isReply={props.isReply}
                id={props.id}
                />
                <p>
                    {props.comment}
                </p>
            </div>
            </React.Fragment>
            }
        </div>
    )
}
export default CommentCard