import Accordion from "./components/accordion/index";
import ImageSlider from "./components/image-slider";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";

function App() {
  return (
    <>
      {/* Accordion component */}
      {/* <Accordion /> */}
      {/* Random-Color component */}
      {/* <RandomColor /> */}
      {/* Star Rating component */}
      {/* <StarRating noOfStars={10} /> */}
      {/* Image Slider component */}
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={5} />
    </>
  );
}

export default App;
