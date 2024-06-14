import React from "react";
import video from "../data/video.js";
import Main from './Main.js'
import Comments from './Comments.js'

function App() {
  return (
    <div className="App">
      <Main video={video}/>
      <Comments comments={video.comments}/>
    </div>
  );
}

export default App;
