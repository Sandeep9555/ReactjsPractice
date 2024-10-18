import { useState } from "react";
import "./App.css";

const lists = [
  "Delhi",
  "Mumbai",
  "Lahore",
  "Karachi",
  "Dhaka",
  "Chittagong",
  "Lucknow",
];
function App() {
  const [input, setInput] = useState("");
  const filterList = lists.filter((list) => {
    return list.toLocaleLowerCase().includes(input.toLocaleLowerCase());
  });

  return (
    <div className="search-container">
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        className="search-inpit"
        placeholder="Search..."
      />
      <ul className="search-list">
        {filterList.map((option, index) => {
          return (
            <li className="search - optiins" key={index}>
              {option}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
