import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

export default function ImageSlider({ url, page = 1, limit = 5 }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const fetchImages = async (url) => {
    try {
      const res = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await res.json();
      console.log(data);
      setImages(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(url);
  }, []);

  const handlePrevious = () => {
    setCurrentSlide((p) => (p === 0 ? images.length - 1 : p - 1));
  };

  const handleNext = () => {
    setCurrentSlide((p) => (p === images.length - 1 ? 0 : p + 1));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handlePrevious}
      />
      {images && images.length
        ? images.map((img, ind) => {
            return (
              <img
                key={img.id}
                alt={img.download_url}
                src={img.download_url}
                className={
                  currentSlide === ind
                    ? "current-image"
                    : "current-image hide-current-image"
                }
              />
            );
          })
        : null}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handleNext}
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
