import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

export default function Main() {
  return (
    <main>
      <Carousel>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="https://www.shutterstock.com/shutterstock/photos/412805536/display_1500/stock-photo-green-swallowtail-butterfly-papilio-palinurus-insect-in-the-nature-habitat-sitting-in-the-green-412805536.jpg"
            alt="First slide"
            fluid
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="https://www.shutterstock.com/shutterstock/photos/412805536/display_1500/stock-photo-green-swallowtail-butterfly-papilio-palinurus-insect-in-the-nature-habitat-sitting-in-the-green-412805536.jpg"
            alt="Second slide"
            fluid
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="https://www.shutterstock.com/shutterstock/photos/412805536/display_1500/stock-photo-green-swallowtail-butterfly-papilio-palinurus-insect-in-the-nature-habitat-sitting-in-the-green-412805536.jpg"
              alt="Third slide"
              fluid
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </main>
  );
}
