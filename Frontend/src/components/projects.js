import React from 'react';
import p1 from '../photos/projectIcons/proj1.jpg';
import p2 from '../photos/projectIcons/proj2.jpg';
import p3 from '../photos/projectIcons/proj3.jpg';
import p4 from '../photos/projectIcons/proj4.jpg';
import p5 from '../photos/projectIcons/proj5.jpg';
import p6 from '../photos/projectIcons/proj6.jpg';
import p7 from '../photos/projectIcons/proj7.jpg';
import p8 from '../photos/projectIcons/proj8.jpg';
import {Button, Jumbotron, Modal} from 'react-bootstrap'
import '../styles/projectsStyle.css';

class Projects extends React.Component{

    constructor(){
        super()
        this.state={
            show:false
        }
    }

    showModal1(){
        this.setState({show:!this.state.show})
    }
    render(){
        return(
            <Jumbotron id="JtronProjects">
                <h1 id="ProjTitle">Projects</h1>
                <div id="projectsTABLE">
                    <div class="row">
                        <div class="column">
                            <div class="hovereffect">
                                <img class="img-responsive" src={p1} alt="Project 1"/>
                                <div class="overlay">
                                    <h2>Lindor House</h2>
                                    <button class="info" onClick={()=>{this.showModal1()}}>View Project</button>
                                </div>
                            </div>
                        </div>
                        <Modal show={this.state.show} onHide={()=>{this.showModal1()}}>
                            <Modal.Header closeButton>Project Gallery</Modal.Header>
                            <Modal.Body>
                                <img src={p1} alt="Project 1 opener"/>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={()=>{this.showModal1()}}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <div class="column">
                            <div class="hovereffect">
                                <img class="img-responsive" src={p2} alt="Project 2"/>
                                <div class="overlay">
                                    <h2>Open Valley</h2>
                                    <button class="info" >View Project</button>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="hovereffect">
                                <img class="img-responsive" src={p3} alt="Project 3"/>
                                <div class="overlay">
                                    <h2>Light Modern</h2>
                                    <button class="info" >View Project</button>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="hovereffect">
                                <img class="img-responsive" src={p4} alt="Project 4"/>
                                <div class="overlay">
                                    <h2>Amaze Sides</h2>
                                    <button class="info" >View Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="column">
                            <div class="hovereffect">
                                <img class="img-responsive" id="left2" src={p5} alt="Project 5"/>
                                <div class="overlay">
                                    <h2>Enlight Living</h2>
                                    <button class="info" >View Project</button>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="hovereffect">
                                <img class="img-responsive" src={p6} alt="Project 6"/>
                                <div class="overlay">
                                    <h2>Sustauns Project</h2>
                                    <button class="info" >View Project</button>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="hovereffect">
                                <img class="img-responsive" src={p7} alt="Project 7"/>
                                <div class="overlay">
                                    <h2>Aurelianus</h2>
                                    <button class="info" >View Project</button>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="hovereffect">
                                <img class="img-responsive" src={p8} alt="Project 8"/>
                                <div class="overlay">
                                    <h2>Cladius Offices</h2>
                                    <button class="info" >View Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        )
    }
}
    
export default Projects;