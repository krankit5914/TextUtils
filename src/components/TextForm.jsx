import React, { useState } from "react";

const TextForm = (props) => {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to UpperCase", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to LowerCase", "success");
  };
  const handlecleartextClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert(" Text Cleared", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert(" Text copy", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Remove Extra spaces", "success");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById("toggle");
    if (toogle.textContent === "Speak") {
      toogle.innerHTML = "Stop";
    } else {
      toogle.innerHTML = "Speak";
      if ((toogle.innerHTML = "Speak")) {
        window.speechSynthesis.cancel();
      }
    }
    props.showAlert(" Text speacking", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          onClick={handleUpClick}
          className="btn btn-primary mx-2 my-2"
        >
          Convert to UperCase
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleLoClick}
          className="btn btn-primary mx-2 my-2"
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          onClick={handlecleartextClick}
          className="btn btn-primary mx-2 my-2"
        >
          Cler Text
        </button>
        <button
          disabled={text.length === 0}
          onClick={speak}
          className="btn btn-warning mx-2 my-2"
          id="toggle"
        >
          Speak
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleExtraSpaces}
          className="btn btn-warning mx-2 my-2"
          id="toggle"
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleCopy}
          className="btn btn-primary mx-2 my-2"
          id="toggle"
        >
          Copy Text
        </button>
      </div>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.trim() === "" ? 0 : text.match(/\S+/g).length} words and{" "}
          {text.replace(/\s+/g, "").length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minune reads
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
};

export default TextForm;
