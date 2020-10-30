// review
// Stores and renders the carousel for the review section

import React from 'react'; // Imports react framework
import Carousel from 'react-bootstrap/Carousel'; // Imports carousel

import 'bootstrap/dist/css/bootstrap.min.css'; // Imports styling
import '../styles/reviewStyle.css'; // Imports styling


// Renders the carousel
const Review = () => {
    return(

        <Carousel id="reviews">
            <Carousel.Item>
                <div class='reviewFrame'>
                    <h2>This is just the first sample review</h2>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class='reviewFrame'>
                    <h2>This is just the second sample review</h2>
                </div>
            </Carousel.Item>
            </Carousel>
    )
}

export default Review