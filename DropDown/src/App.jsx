import { useState } from "react";
import "./App.css";

const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
];
function App() {
  const [country, setCountry] = useState("");

  return (
    <div className="App">
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        <option value="">Select Country</option>
        {countries.map((item, index) => {
          return (
            <option key={index} value={item.value}>
              {item.name}
            </option>
          );
        })}
      </select>
      <select disabled={!country}>
        <option value="">Select city</option>
        {country &&
          countries
            .find((currentCountry) => currentCountry.value == country)
            .cities.map((item, index) => {
              return <option value={index}>{item}</option>;
            })}
      </select>
    </div>
  );
}

export default App;
