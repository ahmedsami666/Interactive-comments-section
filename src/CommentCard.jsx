import Score from './Score'
import Header from './Header'

const CommentCard = (props) => {
    return (
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
                isReply={props.isReply}
                id={props.id}
                />
                <p>
                    {props.comment}
                </p>
            </div>
        </div>
    )
}
export default CommentCard