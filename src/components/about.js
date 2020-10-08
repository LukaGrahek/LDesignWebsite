import React from 'react';
import pic from '../photos/clientimage.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron} from 'react-bootstrap'
import '../styles/aboutStyle.css';
const About = () => {
    return(
        <Jumbotron id="Jtron">

                    <h1 id="AboutTitle">About</h1>
                    <img id="pic" src={pic} alt="Leda Litricin" />
                    <p id ='aboutTXT'>
                         Born in Belgrade, I attended the study of Architecture in Belgrade and graduated in 2002 (M.Arch.). After graduation, I took and obtained a license as a responsible designer. During my studies, I spent two beautiful and significant years living in London (UK). 
                    </p>
                    <p id ='aboutTXT'>
                        Work experience gained in Serbia (Belgrade) and internationally - on large projects (Dubai-UAE, Shanghai-China, Almaty-Kazakhstan, Ontario-Canada). I have almost 20 years of work experience in the fields of architectural and interior design, coordination design, management, and design supervision. 
                    </p>
                    <p id ='aboutTXT'>
                        After several years spent working on commercial projects for local and international companies, in 2015 I started working independently in the field of interior design and its implementation. I enjoy creating residential interiors the most - authentic spaces for authentic people who live their hectic lives in Belgrade and beyond. 
                    </p>
                    {/* <p>
                        <Button variant="primary">Learn more</Button>
                    </p> */}

                   

        </Jumbotron>
    )
}
    
export default About 