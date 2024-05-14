import { useState } from "react";
import "./tabs.css";

export default function TabComponent({ tabsContent, onChange }) {
  const [current, setCurrent] = useState(0);

  return (
    <div style={{ marginTop: "1rem" }}>
      {tabsContent?.length
        ? tabsContent.map((t, ind) => {
            return (
              <button
                key={ind}
                style={{
                  padding: "0.5rem",
                  fontSize: "1.2rem",
                }}
                onClick={() => {
                  onChange(ind);
                  setCurrent(ind);
                }}
              >
                {t.label}
              </button>
            );
          })
        : null}
      <div className="content" style={{ color: "red" }}>
        {tabsContent[current] && tabsContent[current].content}
      </div>
    </div>
  );
}
