import "./styles.css";
import explorer from "./data";
import { useState } from "react";

export default function FileExplorer() {
  const [explorerData, setExplorerData] = useState(explorer);

  console.log(explorerData);

  return <Folder explorer={explorerData} />;
}

function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: "16px" }}>
        <div onClick={() => setExpand(!expand)}>
          <span>📁 {explorer.name}</span>
        </div>

        <div
          style={{
            display: expand ? "flex" : "none",
            paddingLeft: ".25rem",
            flexDirection: "column",
          }}
        >
          {explorer.items.map((exp) => {
            return <Folder key={exp.id} explorer={exp} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span style={{ marginTop: "1rem" }}>📄 {explorer.name}</span>;
  }
}
