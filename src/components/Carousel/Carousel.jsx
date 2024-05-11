import Carousel from 'react-bootstrap/Carousel';
import speech from "./speech.png";
import "./Carousel.css"
function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={speech}
          alt="First slide"
        />
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src={speech}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={speech}
          alt="Third slide"
        />
      </Carousel.Item> */}
    </Carousel>
    
  );
}

export default DarkVariantExample;
