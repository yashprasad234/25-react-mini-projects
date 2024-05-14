import Accordion from "./components/accordion/index";
import FileExplorer from "./components/file-explorer";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more";
import QrGenerator from "./components/qrcode-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
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
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={5} /> */}

      {/* Load more data component */}
      {/* <LoadMoreData /> */}

      {/* File explorer component */}
      {/* <FileExplorer /> */}

      {/* QR code generator */}
      {/* <QrGenerator /> */}

      {/* Light Dark Theme Switch */}
      {/* <LightDarkMode /> */}

      {/* Scroll Indicator */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </>
  );
}

export default App;
