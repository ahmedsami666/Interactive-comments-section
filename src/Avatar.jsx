const Avatar = (props) => {
    return (
        <div className={`avatar ${props.currentUser === props.userName ? 'you': null}`}>
            <img src={props.userImg} alt='userimg'/>
            <span className='user-name'>{props.userName}</span>
            {props.currentUser === props.userName ? <div>you</div>: null}
            <span className='date'>{props.date}</span>
        </div>
    )
}
export default Avatar