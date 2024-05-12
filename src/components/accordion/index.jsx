import "./styles.css";
import data from "./data";
import { useState } from "react";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multiSelected, setMultiSelected] = useState([]);

  const handleSingleSelection = (id) => {
    setSelected((p) => (p === id ? null : id));
  };

  const handleMultipleSelection = (id) => {
    setMultiSelected((p) =>
      p.includes(id)
        ? p.slice(0, p.indexOf(id)).concat(p.slice(p.indexOf(id) + 1, p.length))
        : [...p, id]
    );
  };

  return (
    <div className="wrapper">
      <button
        onClick={() =>
          setEnableMultiSelect((p) => {
            setSelected(null);
            setMultiSelected([]);
            return !p;
          })
        }
      >
        {enableMultiSelect ? "Enable single select" : "Enable multi select"}
      </button>
      <div className="accordion">
        {data.map((item) => {
          if (data.length != 0) {
            return (
              <div className="item" key={item.id}>
                <div
                  className="title"
                  onClick={() =>
                    enableMultiSelect
                      ? handleMultipleSelection(item.id)
                      : handleSingleSelection(item.id)
                  }
                >
                  <h3>{item.question}</h3>
                  <span>+</span>
                </div>
                {enableMultiSelect ? (
                  multiSelected.includes(item.id) ? (
                    <div className="content">{item.answer}</div>
                  ) : null
                ) : selected === item.id ? (
                  <div className="content">{item.answer}</div>
                ) : null}
              </div>
            );
          } else {
            return <div>No data found!</div>;
          }
        })}
      </div>
    </div>
  );
}
