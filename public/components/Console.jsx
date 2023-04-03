import React from "react";

const Console = (props) => {

        return (
          <div className="console-container">
            <div className="console-textbox" readOnly={true}>
                {props.trainingLog} 
            </div>
          </div>
        );
      }

export default Console;