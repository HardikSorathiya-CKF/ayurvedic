import { useState } from "react";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "ingredients", label: "Ingredients" },
  { id: "review", label: "Review" },
];

export default function Tabs({ content }) {
  const [active, setActive] = useState("overview");

  return (
    <div className="pd-tabs">
      <div className="pd-tabs-nav">
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab.id}
            className={`pd-tab${active === tab.id ? " is-active" : ""}`}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="pd-tabs-content">{content[active]}</div>
    </div>
  );
}
