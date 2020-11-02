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
                    <h2>Leda i njen tim su bili sjajni. Zaista su odvojili vreme da razumeju moj stil i pomogli mi da se izrazim u svom domu. Pažnja ekipe do detalja bila je fenomenalna. Uradili su neverovatan posao mešajući moj stari i novi nameštaj i dekor. Svakako bih ih preporučio. -Lincornea Bosch</h2>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class='reviewFrame'>
                    <h2>Apsolutno sam voleo da radim sa Ledom i njenim fenomenalnim timom. Čitavu obnovu učinili su neverovatnim iskustvom. Svakako bih ih preporučio svima. Oni su profesionalni, ali podjednako dopadljivi. Moj stan je bio potpuno srušen i redizajniran, ali činilo se da je čitav postupak bio gotovo bez napora. Jane je postala prijateljica i zapravo mi je nedostajao tim kada je projekat završen. -Borag Heimlečić</h2>
                </div>
            </Carousel.Item>
            </Carousel>
    )
}

export default Review