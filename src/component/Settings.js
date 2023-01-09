import React, { useState } from "react";

function Settings(props) {
  const [speed, setSpeed] = useState(0.5);
  const playRecording = () => {
    let index = 0;
    let recordArray = props.recording.split(" ");
    const interval = setInterval(() => {
      const audioTag = document.getElementById(recordArray[index]);

      audioTag.volume = props.volume;
      audioTag.currentTime = 0;
      audioTag.play();
      index++;
    }, speed * 600);
    setTimeout(
      () => clearInterval(interval),
      600 * speed * recordArray.length - 1
    );
  };
  return (
    <div className="container">
      <div className="p-3">
        <br />
        <h4>Volume</h4>
        <input
          type="range"
          step="0.01"
          value={props.volume}
          max="1"
          min="0"
          className="w-50"
          onChange={(e) => props.setVolume(e.target.value)}
        />
        <br />
        <button className="btn btn-success mx-1" onClick={playRecording}>
          Play
        </button>
        <button
          className="btn btn-danger mx-1"
          onClick={() => props.setRecording("")}
        >
          Clear
        </button>
        <br />
        <h4 className="my-1">Play Speed</h4>
        <input
          type="range"
          step="0.01"
          value={speed}
          max="1.2"
          min="0.1"
          className="w-50"
          onChange={(e) => setSpeed(e.target.value)}
        />
        <div
          className="container overflow-hidden text-center my-1 bg-dark"
          style={{
            border: "1px solid pink",
            marginTop: "0px",
            marginLeft: "0px",
            width: "250px",
            height: "72px",
            borderRadius: "5px"
          }}
        >
          <h3>{props.recording}</h3>
        </div>
      </div>
    </div>
  );
}

export default Settings;
