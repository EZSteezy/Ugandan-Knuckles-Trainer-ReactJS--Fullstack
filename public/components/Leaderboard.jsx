import React from "react";

const Leaderboard = (props) => {
  console.log(props.leaderboard);
  return (
    <div className="leaderboard-container">
      <center><div>Leaderboard</div></center>
      <ul className="leaderboard-textbox">
        {Array.isArray(props.leaderboard) && props.leaderboard.map(user => (
          <li key={user.id}>{user.username}: {user.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;