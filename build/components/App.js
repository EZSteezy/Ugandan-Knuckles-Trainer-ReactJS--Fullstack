import React, {useState, useEffect} from "../_snowpack/pkg/react.js";
import Console from "./Console.js";
import Button from "./Button.js";
import Leaderboard from "./Leaderboard.js";
import {useParams} from "../_snowpack/pkg/react-router-dom.js";
const App = () => {
  const [ugandanKnuckles] = useState({health: 1, power: 1, level: 0, wallet: 0});
  const [knucklesPic, setKnucklesPic] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvQoaQKLWn40Qt0KwohgJMnT6rBkM7mOs8lA9UifJ2yg&usqp=CAU&ec=48600112");
  const [trainingLog, setTrainingLog] = useState("Your Ugandan Knuckles has appeared!");
  const [leaderboard, setLeaderboard] = useState([]);
  useEffect(() => {
    async function getScores() {
      const response = await fetch("http://localhost:3001/api/scores");
      const data = await response.json();
      console.log(data);
      setLeaderboard(data);
    }
    getScores();
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    id: "app",
    className: "app"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "user"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "text-input"
  }, "Username: "), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    className: "textbox",
    id: "text-input",
    name: "text-input"
  }), /* @__PURE__ */ React.createElement("button", null, "Submit to Leaderboard")), /* @__PURE__ */ React.createElement("div", {
    id: "main",
    className: "main"
  }, /* @__PURE__ */ React.createElement("img", {
    src: knucklesPic,
    alt: "Ugandan Knuckles"
  }), /* @__PURE__ */ React.createElement("br", null), "It's time! Train your Ugandan Knuckles now!", /* @__PURE__ */ React.createElement("pre", null), "Level: ", ugandanKnuckles.level, " ", /* @__PURE__ */ React.createElement("pre", null), "Power: ", ugandanKnuckles.power, " ", /* @__PURE__ */ React.createElement("pre", null), "Health: ", ugandanKnuckles.health, " ", /* @__PURE__ */ React.createElement("pre", null), "Wallet: ", ugandanKnuckles.wallet), /* @__PURE__ */ React.createElement(Console, {
    trainingLog
  }), /* @__PURE__ */ React.createElement("div", {
    className: "trainerButtons"
  }, /* @__PURE__ */ React.createElement(Button, {
    knucklesPic,
    setKnucklesPic,
    ugandanKnuckles,
    setTrainingLog,
    trainingLog
  })));
};
export default App;
