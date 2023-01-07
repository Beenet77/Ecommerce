import Carousel from 'react-bootstrap/Carousel';
import "../style.css"

function DashboardCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carusolImg"
          src="https://icms-image.slatic.net/images/ims-web/85170a0a-9063-41fb-a48e-08f88599522c.jpg"
          alt="First slide"
        />
        
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carusolImg"
          src="https://icms-image.slatic.net/images/ims-web/7ad736be-6cb2-4127-a17f-a30a288ae016.jpg"
          alt="Second slide"
        />

        
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carusolImg"
          src="https://icms-image.slatic.net/images/ims-web/e50a45a7-3f72-46e6-8d5e-969c38951187.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default DashboardCarousel;