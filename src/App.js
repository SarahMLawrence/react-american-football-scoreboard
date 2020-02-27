//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [totalHome, setTotalHome] = useState(0);
  const [totalAway, setTotalAway] = useState(0);

  const [numQuarter, setQuarter] = useState(1);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{totalHome}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{totalAway}</div>
          </div>
        </div>
        <BottomRow />
        <div className="quarter">
          <h3 className="quarter__title">Quarter</h3>
          <div className="quarter__value">{numQuarter}</div>
        </div>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={
            () => {
              setTotalHome(totalHome + 6)
            }
          }>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={
            () => {
              setTotalHome(totalHome + 1)
            }
          }>Home Field Goal</button>

          <button className="reset" onClick={
            () => {
              setTotalHome(0)
            }
          }>Home - Reset Score</button>

        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={
            () => {
              setTotalAway(totalAway + 6)
            }
          }>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={
            () => {
              setTotalAway(totalAway + 1)
            }
          }>Away Field Goal</button>

          <button className="reset" onClick={
            () => {
              setTotalAway(0);
            }
          }>Away Reset Score</button>

          <button className="quarter" onClick={
            () => {
              setQuarter(numQuarter + 1);

              if (numQuarter == 4) {
                setQuarter(0);
                alert('yay! game over');
              }
            }
          }>quarter</button>

        </div>



      </section>
    </div>
  );
}

export default App;
