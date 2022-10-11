import React, { useState } from "react";




function App() {
  const [headingText, setHeadingText] = useState("Hello");

  function handleMouseAction1(){
    setHeadingText("Hovering")
  };

  function handleMouseAction2(){
    setHeadingText("Leaving")
  };


  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onMouseOver={handleMouseAction1} onMouseLeave={handleMouseAction2}>Submit</button>
    </div>
  );
}

export default App;
