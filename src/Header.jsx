const Header = (props) => {
    const updateState = (e) => {
        var key = e.target.className
        props.setReply(prevState => {
            return {...prevState, [key]: true}
        })
      }
    return (
        <div className="header">
            <div className={`avatar ${props.currentUser === props.userName ? 'you': null}`}>
                <img src={props.userImg} alt='userimg'/>
                <span className='user-name'>{props.userName}</span>
                {props.currentUser === props.userName ? <div>you</div>: null}
                <span className='date'>{props.date}</span>
            </div>
            {props.currentUser === props.userName ?
            <div className="action-current-user">
                <div className="action delete">
                    <img src='./images/icon-delete.svg' alt="delete"/>
                    <span>Delete</span>
                </div>
                <div className="action">
                    <img src='./images/icon-edit.svg' alt="edit"/>
                    <span>Edit</span>
                </div>
            </div>:
            <div className="action">
                <img src='./images/icon-reply.svg' alt="reply"/>
                <span onClick={updateState} className={props.id}>Reply</span>
            </div>
            }
        </div>
    )
}
export default Header