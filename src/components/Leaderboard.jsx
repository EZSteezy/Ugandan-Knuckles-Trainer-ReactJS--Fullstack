import React from "react";

const Console = (props) => {

        return (
          <div className="leaderboard-container">
              <center><div>Leaderboard</div></center>
            <div className="leaderboard-textbox" readOnly={true}>
            {props.leaderboard}
            </div>
          </div>
        );
      }

export default Console;