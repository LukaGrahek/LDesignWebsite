import React from 'react';
import fill from '../photos/ProjectImg.jpg';
import {Jumbotron} from 'react-bootstrap'
import '../styles/projectsStyle.css';

const Projects = () => {
    return(
        <Jumbotron>
            <h1 id="ProjTitle">Projects</h1>
            <div class="row">
                <div class="column">
                    <div class="hovereffect">
                         <img class="img-responsive" id="left" src={fill} alt=""/>
                         <div class="overlay">
                            <h2>project Name</h2>
                            <a class="info" href="#">View Project</a>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="hovereffect">
                        <img class="img-responsive" src={fill} alt=""/>
                        <div class="overlay">
                            <h2>project Name</h2>
                            <a class="info" href="#">View Project</a>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="hovereffect">
                        <img class="img-responsive" src={fill} alt=""/>
                        <div class="overlay">
                            <h2>project Name</h2>
                            <a class="info" href="#">View Project</a>
                         </div>
                    </div>
                </div>
                <div class="column">
                    <div class="hovereffect">
                        <img class="img-responsive" src={fill} alt=""/>
                        <div class="overlay">
                            <h2>project Name</h2>
                            <a class="info" href="#">View Project</a>
                         </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="hovereffect">
                        <img class="img-responsive" id="left2" src={fill} alt=""/>
                        <div class="overlay">
                            <h2>project Name</h2>
                            <a class="info" href="#">View Project</a>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="hovereffect">
                         <img class="img-responsive" src={fill} alt=""/>
                        <div class="overlay">
                            <h2>project Name</h2>
                            <a class="info" href="#">View Project</a>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="hovereffect">
                        <img class="img-responsive" src={fill} alt=""/>
                        <div class="overlay">
                            <h2>project Name</h2>
                            <a class="info" href="#">View Project</a>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="hovereffect">
                        <img class="img-responsive" src={fill} alt=""/>
                        <div class="overlay">
                             <h2>project Name</h2>
                             <a class="info" href="#">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </Jumbotron>
    )
}
    
export default Projects