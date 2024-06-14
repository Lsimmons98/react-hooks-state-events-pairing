import React, {useState} from "react";

function Comment({comment, setCommentsList}) {
  const [voteCount, setVoteCount] = useState({'upVotes': 0, 'downVotes': 0})

  const handleClick = (e) => {
    e.preventDefault()
    const checkButton = e.target.classList.contains('upVoteButton')
    const changeUpVote = voteCount.upVotes + 1
    const changeDownVote = voteCount.downVotes + 1
    setVoteCount(checkButton ? {...voteCount, 'upVotes' : changeUpVote}
      : {...voteCount, 'downVotes' : changeDownVote})
  }

  const handleDelete = (e) => {
    e.preventDefault()
    setCommentsList(comment.id)
   }

  return (
    <div id={comment.id}>
       <h3>{comment.user}</h3>
       <p>{comment.comment}</p>
       <div>
          <button onClick={handleClick}className='upVoteButton'>{voteCount.upVotes} 👍</button>
          <button onClick={handleClick}className='downVoteButton'>{voteCount.downVotes} 👎</button>
          <button onClick={handleDelete}className='deleteButton'>Remove Comment</button>
      </div>
    </div>
  );
}

export default Comment;
