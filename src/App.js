import CommentCard from "./CommentCard";
import CopyRight from "./CopyRight";
import Reply from "./Reply"
import Input from "./Input";
import data from "./data.json"
import React from "react";


function App() {
  var [isReply, setReply] = React.useState({})
  var [isPosted, setIsPosted] = React.useState({})
  var [input, setInput] = React.useState({})
  var [edit, setEdit] = React.useState({})
  var [userReply, setuserReply] = React.useState(false)

  const createReply = (reply, index) => {
    return (
      <React.Fragment>
      <Reply
      score={reply.score}
      comment={reply.content}
      userImg={reply.user.image.png}
      userName={reply.user.username}
      date={reply.createdAt}
      replyingTo={reply.replyingTo}
      currentUser={data.currentUser.username}
      setReply={setReply}
      id={reply.id}
      edit={edit}
      setEdit={setEdit}
      isPosted={isPosted} 
      setIsPosted={setIsPosted}
      />   

      {isPosted[`${index + 3}`] ?
      <Reply 
        score={0}
        comment={input[`${index + 3}`]}
        userImg={data.currentUser.image.png}
        userName={data.currentUser.username}
        date={"Just Now"}
        currentUser={data.currentUser.username}
        isReply={isReply}
        setReply={setReply}
        edit={edit}
        setEdit={setEdit}
        id={reply.id}
        isPosted={isPosted} 
        setIsPosted={setIsPosted}
        /> :
        null
      }

      {isReply[`${index + 3}`] ? 
      <Input 
      userImg={data.currentUser.image.png} 
      userName={`@${reply.user.username}`}
      isPosted={isPosted} 
      setIsPosted={setIsPosted}
      id={reply.id}
      input={input}
      setInput={setInput}
      setReply={setReply}
      setuserReply={setuserReply}/>: 
      null}
      </React.Fragment>
    )
  }

  const createComment = (comment, index) => {
    return (
      <React.Fragment>
        <CommentCard 
          score={comment.score}
          comment={comment.content}
          userImg={comment.user.image.png}
          userName={comment.user.username}
          date={comment.createdAt}
          currentUser={data.currentUser.username}
          isReply={isReply}
          setReply={setReply}
          id={comment.id}
          setEdit={setEdit}
          setIsPosted={setIsPosted}
        />

        {isPosted[`${index + 1}`] ?
          <Reply
          score={0}
          comment={input[`${index + 1}`]}
          userImg={data.currentUser.image.png}
          userName={data.currentUser.username}
          date={"Just Now"}
          currentUser={data.currentUser.username}
          isReply={isReply}
          setReply={setReply}
          edit={edit}
          setEdit={setEdit}
          id={comment.id}
          isPosted={isPosted} 
          setIsPosted={setIsPosted}
          /> :
          null
        }

        {isReply[`${index + 1}`] ? 
        <Input 
        userImg={data.currentUser.image.png} 
        userName={`@${comment.user.username}`}           
        isPosted={isPosted} 
        setIsPosted={setIsPosted}
        id={comment.id}
        input={input}
        setInput={setInput}
        setReply={setReply}/>: 
        null}

        {comment.replies.map(createReply)}
      </React.Fragment>
    )
  }

  return (
    <div className="main">
      <div className="cards">
        {data.comments.map(createComment)}

        {userReply ? 
        null : 
        <Input 
        userImg={data.currentUser.image.png}
        userName=''
        createReply={createReply}
        isPosted={isPosted}
        setIsPosted={setIsPosted}
        input={input}
        setInput={setInput}
        setReply={setReply}
        userReply={userReply}
        setuserReply={setuserReply}
        />}

      </div>
      <CopyRight/>
    </div>
  );
}

export default App;
