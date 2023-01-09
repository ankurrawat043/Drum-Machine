import React, { useState } from "react";
import Pad from "./Pad";
import Settings from "./Settings";
function Drum() {
  const audiaClips = [
    {
      keyCode: 81,
      keyTrigger: "Q",
      id: "Heater 1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      keyCode: 87,
      keyTrigger: "W",
      id: "Heater2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      keyCode: 69,
      keyTrigger: "E",
      id: "Heater3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      keyCode: 65,
      keyTrigger: "A",
      id: "Heater4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      keyCode: 83,
      keyTrigger: "S",
      id: "Clap",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      keyCode: 68,
      keyTrigger: "D",
      id: "OpenHH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      keyCode: 90,
      keyTrigger: "Z",
      id: "KicknHat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      keyCode: 89,
      keyTrigger: "X",
      id: "Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      keyCode: 67,
      keyTrigger: "C",
      id: "ClosedHH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];
  const [volume, setVolume] = useState(1);
  const [recording, setRecording] = useState("");

  return (
    <div className="bg-secondary min-vh-100 text-white">
      <div className="text-center">
        <h2>Drum Machine</h2>
        <div className="container overflow-hidden text-center">
          <div
            className="row "
            style={{
              border: "6px solid orange",
              marginTop: "100px",
              marginLeft: "220px",
              width: "660px",
              height: "316px",
              borderRadius: "5px",
              backgroundColor: "grey"
            }}
          >
            <div className="col my-3">
              {audiaClips.map((clip) => (
                <Pad
                  key={clip.id}
                  clip={clip}
                  volume={volume}
                  setRecording={setRecording}
                />
              ))}
            </div>
            <div className="col">
              <Settings
                volume={volume}
                recording={recording}
                setVolume={setVolume}
                setRecording={setRecording}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drum;
