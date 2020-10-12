import React from 'react';
import '../styles/reviewStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const Review = () => {
    return(

        <Carousel id="reviews">
            <Carousel.Item>
                <div class='reviewFrame'>
                    <h2>This is my first review</h2>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class='reviewFrame'>
                    <h2>This is my second review</h2>
                </div>
            </Carousel.Item>
            </Carousel>
    )
}

export default Review