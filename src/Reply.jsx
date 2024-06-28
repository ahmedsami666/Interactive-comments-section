import Score from './Score'
import Header from './Header'

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
            </div>
        </div>
    )
}
export default Reply