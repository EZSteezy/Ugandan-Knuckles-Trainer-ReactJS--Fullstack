import React from "../_snowpack/pkg/react.js";
const Console = (props) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "leaderboard-container"
  }, /* @__PURE__ */ React.createElement("center", null, /* @__PURE__ */ React.createElement("div", null, "Leaderboard")), /* @__PURE__ */ React.createElement("div", {
    className: "leaderboard-textbox",
    readOnly: true
  }, props.leaderboard));
};
export default Console;
