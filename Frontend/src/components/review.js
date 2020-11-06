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
                    <h2>Leda and her team were great. They really took the time to understand my style and helped me express myself in my home. The team's attention to detail was phenomenal. They did an amazing job blending my old and new furniture and decor etc. I would definitely recommend them, thank's alot  for  everything  Leda!!!              -Lincornea Bosch</h2>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class='reviewFrame'>
                    <h2>I absolutely loved working with Leda and her phenomenal team. They made the entire renovation an amazing experience. I would definitely recommend them to anyone. They are professional yet equally personable. My condo reno was a total demolition and re-design but the entire process seemed almost effortless.  -Borag Heimlecic</h2>
                </div>
            </Carousel.Item>
            </Carousel>
    )
}

export default Review