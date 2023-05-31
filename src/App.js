import { useState, useRef } from "react";
import Heading from "./Components/Heading";
import SampleData from "./Components/SampleData";
import Example from "./Components/Example";
import "./App.css";
import UsrExample from "./Components/UsrExample";

function App() {
  const d3fault =
    "Spritz speed reading is a special way of reading that helps you read really fast. Instead of moving your eyes across the page, it shows you one word at a time in the middle of the screen. This makes it easier for your brain to understand the words quickly. Spritz takes advantage of how our brains like to group words together, so you can read faster without getting confused. It's a great tool for people who want to read a lot of information in a short time.";
  const message = useRef();

  const [text, setText] = useState(d3fault);

  const spritzitup = (event) => {
    if (message.current.value !== "") {
      setText(message.current.value);
    }
  };
  return (
    <div className="App">
      <Heading />
      <SampleData text={text} />
      <Example />
      <UsrExample message={message} spritzitup={spritzitup} />
    </div>
  );
}

export default App;
