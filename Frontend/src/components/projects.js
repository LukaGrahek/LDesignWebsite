import React from 'react';
import p1 from '../photos/projectIcons/proj1.jpg';
import p2 from '../photos/projectIcons/proj2.jpg';
import p3 from '../photos/projectIcons/proj3.jpg';
import p4 from '../photos/projectIcons/proj4.jpg';
import p5 from '../photos/projectIcons/proj5.jpg';
import p6 from '../photos/projectIcons/proj6.jpg';
import p7 from '../photos/projectIcons/proj7.jpg';
import p8 from '../photos/projectIcons/proj8.jpg';
import {Jumbotron} from 'react-bootstrap'
import '../styles/projectsStyle.css';

const Projects = () => {
    return(
        <Jumbotron id="JtronProjects">
            <h1 id="ProjTitle">Projects</h1>
            <div id="projectsTABLE">
                <div class="row">
                    <div class="column">
                        <div class="hovereffect">
                            <img class="img-responsive" src={p1} alt=""/>
                            <div class="overlay">
                                <h2>project Name</h2>
                                <a class="info" href="">View Project</a>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="hovereffect">
                            <img class="img-responsive" src={p2} alt=""/>
                            <div class="overlay">
                                <h2>project Name</h2>
                                <a class="info" href="">View Project</a>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="hovereffect">
                            <img class="img-responsive" src={p3} alt=""/>
                            <div class="overlay">
                                <h2>project Name</h2>
                                <a class="info" href="">View Project</a>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="hovereffect">
                            <img class="img-responsive" src={p4} alt=""/>
                            <div class="overlay">
                                <h2>project Name</h2>
                                <a class="info" href="">View Project</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="column">
                        <div class="hovereffect">
                            <img class="img-responsive" id="left2" src={p5} alt=""/>
                            <div class="overlay">
                                <h2>project Name</h2>
                                <a class="info" href="">View Project</a>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="hovereffect">
                            <img class="img-responsive" src={p6} alt=""/>
                            <div class="overlay">
                                <h2>project Name</h2>
                                <a class="info" href="">View Project</a>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="hovereffect">
                            <img class="img-responsive" src={p7} alt=""/>
                            <div class="overlay">
                                <h2>project Name</h2>
                                <a class="info" href="">View Project</a>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="hovereffect">
                            <img class="img-responsive" src={p8} alt=""/>
                            <div class="overlay">
                                <h2>project Name</h2>
                                <a class="info" href="">View Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Jumbotron>
    )
}
    
export default Projects