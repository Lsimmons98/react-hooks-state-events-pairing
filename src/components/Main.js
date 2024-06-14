import React, {useState} from "react";

function Main({video}) {
  const [voteCount, setVoteCount] = useState({'upVotes': 0, 'downVotes': 0})

  console.log("Here's your data:", video);
  const handleClick = (e) => {
    e.preventDefault()
    const checkButton = e.target.classList.contains('upVoteButton')
    const changeUpVote = voteCount.upVotes + 1
    const changeDownVote = voteCount.downVotes + 1
    setVoteCount(checkButton ? {...voteCount, 'upVotes' : changeUpVote}
      : {...voteCount, 'downVotes' : changeDownVote})
  }


  return (
    <div>
        <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>{video.views} Views | {video.createdAt}</p>
      <div>
          <button onClick={handleClick}className='upVoteButton'>{voteCount.upVotes} 👍</button>
          <button onClick={handleClick}className='downVoteButton'>{voteCount.downVotes} 👎</button>
      </div>

    </div>
  );
}

export default Main;
