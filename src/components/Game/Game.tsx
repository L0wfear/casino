import React from "react";
import classes from "./Game.module.scss";
import LoadBar from "../Common/Loadbar/Loadbar";

const Game = () => {

  return (
    <div className={classes.game_container}>
      <div className={classes.game_body}>
        <LoadBar />
      </div>
      <div className={classes.game_rightBar}></div>
    </div>
  );
};

export default Game;
