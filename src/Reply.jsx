import Score from './Score'
import Header from './Header'

const Reply = (props) => {
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
                    />
                    <p>
                        <span>@{props.replyingTo}</span>
                        {props.comment}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Reply