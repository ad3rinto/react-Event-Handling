import React, { useState } from "react";




function App() {
  const [colourOfButton, setColourText] = useState("Hello");
  

  function handleMouseAction1(){

    setColourText("Black")
  };

  function handleMouseAction2(){
    setColourText("White")
  };


  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{ backgroundColor: colourOfButton}} onMouseOver={handleMouseAction1} onMouseLeave={handleMouseAction2}>Submit</button>
    </div>
  );
}

export default App;
