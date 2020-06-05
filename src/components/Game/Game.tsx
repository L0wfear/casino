import React from "react";
import classes from "./Game.module.scss";
import LoadBar from "../Common/Loadbar/Loadbar";
import styled from "styled-components";
import Timer from "../Common/Timer/Timer";

const SDivOrText = styled.div`
  color: rgba(0, 0, 0, 0.3);
  font: normal 700 18px / 48px 'Pt Sans';
  top: 50%;
  right: 38%;
  transform: translate(50%, -50%);
  position: absolute;
`;

const Game = () => {

  return (
    <div className={classes.game_container}>
      <div className={classes.game_body}>
        <LoadBar />
        <SDivOrText>
          or
        </SDivOrText>
        <Timer />
      </div>
      <div className={classes.game_rightBar}></div>
    </div>
  );
};

export default Game;
