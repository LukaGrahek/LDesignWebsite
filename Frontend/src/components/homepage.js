// homepage
// Stores the homepage elemts (carousel)

import React from 'react'; // Imports react framework
import slide1 from '../photos/1bed.jpg'; // Imports photo for 1st slide
import slide2 from '../photos/2room.jpg'; // Imports photo for 2nd slide
import slide3 from '../photos/3living.jpg'; // Imports photo for 3rd slide 
import slide4 from '../photos/4combo.jpg'; // Imports photo for 4th slide
//import slide5 from '../photos/5room.jpg';
import '../styles/homepageStyle.css'; // Imports syling
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'; // Imports carousel from react

// Renders the carousel and its html elements
const HomeSlide = () => {
    return(
        //<img src={bed} alt="Beautifully designed Bed portrait" />
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide2}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide4}
                alt="Fourth slide"
                />

                <Carousel.Caption>
                <h3>Fourth slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            {/* <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide5}
                alt="Fifth slide"
                />

                <Carousel.Caption>
                <h3>Fifth slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item> */}
            </Carousel>
    )
}

export default HomeSlide 