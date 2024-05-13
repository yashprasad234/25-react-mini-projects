import { useState } from "react";
import "./styles.css";
import QRCode from "react-qr-code";

export default function QrGenerator() {
  const [input, setInput] = useState("");
  const [value, setValue] = useState("");

  function handleGenerateQrCode() {
    setValue(input);
    setInput("");
  }

  return (
    <div>
      <h1 style={{ padding: "5px", fontSize: "3rem" }}>QR GENERATOR</h1>
      <div style={{ marginTop: "2rem" }}>
        <input
          type="text"
          placeholder="Value for QR"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          style={{
            padding: "5px",
            fontSize: "1.1rem",
            width: "300px",
            textAlign: "left !important",
          }}
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
          style={{ padding: "5px", fontSize: "1.1rem" }}
        >
          Generate QR
        </button>
      </div>
      <div style={{ background: "white", padding: "16px", marginTop: "2rem" }}>
        <QRCode value={value} size={400} />
      </div>
    </div>
  );
}
