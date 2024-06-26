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

  const createReply = (reply, index) => {
    return (
      <div>
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
      setReply={setReply}/>: 
      null}
      </div>
    )
  }

  const createComment = (comment, index) => {
    return (
      <div>
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
      </div>
    )
  }

  return (
    <div className="main">
      <div className="cards">
        {data.comments.map(createComment)}
        <Input 
          userImg={data.currentUser.image.png}
          userName=''
          createReply={createReply}
          isPosted={isPosted}
          setIsPosted={setIsPosted}
          input={input}
          setInput={setInput}
          setReply={setReply}
        />
      </div>
      <CopyRight/>
    </div>
  );
}

export default App;
