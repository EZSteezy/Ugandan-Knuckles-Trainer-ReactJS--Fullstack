import React from "../_snowpack/pkg/react.js";
const Console = (props) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "console-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "console-textbox",
    readOnly: true
  }, props.trainingLog));
};
export default Console;
