import React from "react";
import state from "../store";
import { useSnapshot } from "valtio";

const CoustomButton = (props) => {
  const snap = useSnapshot(state);
  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#fff",
      };
    }
  };
  return (
    <button
      className={`px-4 py-1.5 flex-1 rounded-md ${props.customStyles}`}
      style={generateStyle(props.type)}
      onClick={props.handleClick}
    >
      {props.title}
    </button>
  );
};

export default CoustomButton;
