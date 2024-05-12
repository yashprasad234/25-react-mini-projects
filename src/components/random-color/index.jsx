import { useState } from "react";

const randomInt = (min, max) => {
  return min + Math.floor(Math.random() * (max - min + 1));
};

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const handleCreateRandomHexColor = () => {
    const hex = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
    ];
    let hexColor = "";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomInt(0, 15)];
    }
    hexColor = "#" + hexColor;
    console.log(hexColor);
    setColor(hexColor);
  };

  const handleCreateRandomRgbColor = () => {
    const rgbColor = `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(
      0,
      255
    )})`;
    console.log(rgbColor);
    setColor(rgbColor);
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor == "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
    </div>
  );
}
