import { useState } from "react";
import "./scroll.css";
import { useEffect } from "react";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data?.products && data.products.length) {
        setData(data.products);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      console.log("Error: " + err);
    }
  };

  const handleScroll = () => {
    const scrolledHeight =
      document.body.scrollTop || document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((scrolledHeight / windowHeight) * 100);
  };

  console.log(scrollPercentage);

  useEffect(() => {
    fetchData(url);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    window.removeEventListener("scroll", () => {
      console.log("Scroll event listener removed");
    });
  }, []);

  if (loading) return <div>Loading.....</div>;

  return (
    <div>
      <div className="top-container">
        <h1>Scroll Indicator</h1>
        <div className="scroll-tracker">
          <div
            className="progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data?.length > 0 ? data.map((p) => <p key={p.id}>{p.title}</p>) : null}
      </div>
    </div>
  );
}
