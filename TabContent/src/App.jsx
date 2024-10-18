import { useState } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { name: "Tab 1", content: "This is the content of Tab 1" },
    { name: "Tab 2", content: "This is the content of Tab 2" },
    { name: "Tab 3", content: "This is the content of Tab 3" },
  ];

  return (
    <div className="tab-container">
      <div className="tab-buttons">
        {tabs.map((tab, index) => {
          return (
            <button
              key={index}
              className={index === activeTab ? "active" : ""}
              onClick={() => {
                setActiveTab(index);
              }}
            >
              {tab.name}
            </button>
          );
        })}
      </div>
      <div className="tab-content">
        <div>{<p> {tabs[activeTab].content}</p>}</div>
      </div>
    </div>
  );
}

export default App;
