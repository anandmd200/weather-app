import { useState } from "react";
import "./App.css";
import WeatherData from "./components/WeatherData";

function App() {
  const [counter, setCounter] = useState(0);
  const [searchQuery, setSearchQuery] = useState("Anand Kumar");

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const handleChange = (event) => {
    let value = event.target.value;
    setSearchQuery(value);
    console.log(searchQuery);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };
  return (
    <>
      {/* <input
        placeholder="Search"
        type="text"
        value={searchQuery}
        style={{ padding: "10px", minWidth: "300px", borderRadius: "10px" }}
        onChange={(event) => handleChange(event)}
      />
      <button onClick={clearSearch}>Clear Search</button> */}
      <WeatherData />
    </>
  );
}

export default App;
