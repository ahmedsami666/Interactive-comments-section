import Score from './Score'
import Header from './Header'
import React from 'react'
import Action from './Action'

const Reply = (props) => {
    const handleClick = (e) => {
        var key = e.target.className
        props.setEdit(prevState => {
            return {
                ...prevState, [key]: false
            }
        })
    }
    return (
        <div className='reply'>
            <div className='bar'></div>
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
                <p className={props.id} contentEditable={props.edit[`${props.id}`]}>
                    <span>@{props.replyingTo}</span>
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
                {props.edit[props.id] ?
                    <button onClick={handleClick} className={props.id}>
                        UPDATE
                    </button> :
                    null
                }
                </React.Fragment>
                : 
                <React.Fragment>
                <Score 
                score={props.score}
                />
                <div className="content">
                    <Header 
                    userImg={props.userImg}
                    userName={props.userName}
                    date={props.date}
                    currentUser={props.currentUser}
                    setReply={props.setReply}
                    id={props.id}
                    edit={props.edit}
                    setEdit={props.setEdit}
                    isPosted={props.isPosted} 
                    setIsPosted={props.setIsPosted}
                    />
                    <p className={props.id} contentEditable={props.edit[`${props.id}`]}>
                        <span>@{props.replyingTo}</span>
                        {props.comment}
                    </p>
                    {props.edit[props.id] ?
                    <button onClick={handleClick} className={props.id}>
                        UPDATE
                    </button> :
                    null
                    }
                </div>
                </React.Fragment>
                }
            </div>
        </div>
    )
}
export default Reply