import React, {useState} from "react";
import Comment from './Comment'

function Comments({comments}) {
  const [hideComments, setHideComments] = useState(false)
  const [commentsList, setCommentsList] = useState([...comments])

  const handleClick = (e) => {
    e.preventDefault()
    const isHidden = e.target.classList.contains('commentsHidden')
    isHidden ? e.target.classList.remove('commentsHidden') : e.target.classList.add('commentsHidden')
    isHidden ? e.target.textContent = 'Hide Comments' : e.target.textContent = 'Show Comments'
    setHideComments(hideComments ? false : true)
  }

  const handleDelete = (id) => {
    setCommentsList(comments.filter(comment => comment.id !== id))
  }

  const displayComments = () => commentsList.map(comment => {
    if(!hideComments)
    return  <Comment key={comment.id} comment={comment} setCommentsList={handleDelete}/>})

  return(
    <div>
      <button onClick={handleClick}>Hide Comments</button>
      <hr className="divider"/>
      <h2>{comments.length} Comments</h2>
      <div>{displayComments()}</div>
    </div>)
}

export default Comments;
