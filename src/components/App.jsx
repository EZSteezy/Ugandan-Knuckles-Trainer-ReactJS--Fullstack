import React, { useState } from "react";
import Console from "./Console.jsx";
import Button from "./Button.jsx";

const App = () => {

  const [ugandanKnuckles] = useState({ health: 1, power: 1, level: 0, wallet: 0 });
  const [knucklesPic, setKnucklesPic] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvQoaQKLWn40Qt0KwohgJMnT6rBkM7mOs8lA9UifJ2yg&usqp=CAU&ec=48600112");
  const [trainingLog, setTrainingLog] = useState('Your Ugandan Knuckles has appeared!');

  return (
      <div id={"app"} className="app">
        <div>
          <label htmlFor="text-input">Username: </label>
          <input type="text" className="textbox" id="text-input" name="text-input" />
          <pre></pre>
          <label htmlFor="text-input">Password: </label>
          <input type="text" className="textbox" id="text-input" name="text-input" />
          </div>
        <div id={"body"} className="body">
          <img src={knucklesPic} alt="Ugandan Knuckles" /><br></br>
          It's time! Train your Ugandan Knuckles now!<pre></pre>
          Level: {ugandanKnuckles.level} <pre></pre>
          Power: {ugandanKnuckles.power} <pre></pre>
          Health: {ugandanKnuckles.health} <pre></pre>
          Wallet: {ugandanKnuckles.wallet}
        </div>
        <center>
        <Console
          trainingLog={trainingLog}
        />
        <Button
          knucklesPic={knucklesPic}
          setKnucklesPic={setKnucklesPic}
          ugandanKnuckles={ugandanKnuckles}
          setTrainingLog={setTrainingLog}
          trainingLog={trainingLog}
        />
        </center>
      </div>
  );
};

export default App;