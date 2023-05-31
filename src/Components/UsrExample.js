import React from "react";

export default function UsrExample(props) {
  return (
    <div className="usrExample">
      <input
        type="text"
        ref={props.message}
        className="usrexampleTextbox"
        placeholder="your text here"
      ></input>
      <button
        type="submit"
        onClick={props.spritzitup}
        className="usrexampleSubmit"
      >
        Try it Out!
      </button>
    </div>
  );
}
