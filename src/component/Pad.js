import React, { useState } from "react";

const Pad = (props) => {
  const [active, setActive] = useState(false);

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  const handleKeyPress = (e) => {
    console.log(e.keyCode, props.clip.keyCode);
    if (e.keyCode === props.clip.keyCode) {
      playsound();
    }
  };
  const playsound = () => {
    const audioTag = document.getElementById(props.clip.keyTrigger);
    setActive(true);
    setTimeout(() => setActive(false), 200);
    audioTag.volume = props.volume;
    audioTag.currentTime = 0;
    audioTag.play();
    props.setRecording((prv) => prv + props.clip.keyTrigger + " ");
  };
  return (
    <div
      className={`btn btn-primary p-4 m-2 ${active && "btn-warning"}`}
      onClick={playsound}
      key={props.clip.key}
    >
      <audio className="clip" id={props.clip.keyTrigger} src={props.clip.url} />
      {props.clip.keyTrigger}
    </div>
  );
};
export default Pad;
