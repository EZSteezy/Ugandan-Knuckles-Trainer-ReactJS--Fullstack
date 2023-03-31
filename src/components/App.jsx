import React, { useState } from "react";
import Console from "./Console.jsx";
import Button from "./Button.jsx";

const App = () => {

  const [ugandanKnuckles] = useState({ health: 1, power: 1, level: 0, wallet: 0 });
  const [knucklesPic, setKnucklesPic] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvQoaQKLWn40Qt0KwohgJMnT6rBkM7mOs8lA9UifJ2yg&usqp=CAU&ec=48600112");
  const [trainingLog, setTrainingLog] = useState('Your Ugandan Knuckles has appeared!');


  return (
    <center>
      <div id={"app"}>
        It's time! Train your Ugandan Knuckles now!
        <div>

          <img src={knucklesPic} alt="Ugandan Knuckles" /><br></br>
          Level: {ugandanKnuckles.level} <pre></pre>
          Power: {ugandanKnuckles.power} <pre></pre>
          Health: {ugandanKnuckles.health} <pre></pre>
          Wallet: {ugandanKnuckles.wallet}
        </div>
        <Console
          trainingLog={trainingLog}
        />
        <Button
          setKnucklesPic={setKnucklesPic}
          
          ugandanKnuckles={ugandanKnuckles}
          setTrainingLog={setTrainingLog}
          trainingLog={trainingLog}
        />
      </div>
    </center>
  );
};

export default App;