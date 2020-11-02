
/**
 * Projects section: This section displays 8 of Leda Litricin's most prized projects.
 * Each project, when clicked on, will display detailed information about it using a 
 * Modal(pop-up), 4 projects include before and after sliders to display the transformation.
 */

import React, { Component } from 'react' //import react
import p1 from '../photos/projectIcons/proj1.jpg'; //import icon image for project 1
import p2 from '../photos/projectIcons/proj2.jpg'; //import icon image for project 2
import p3 from '../photos/projectIcons/proj3.jpg'; //import icon image for project 3
import p4 from '../photos/projectIcons/proj4.jpg'; //import icon image for project 4
import p5 from '../photos/projectIcons/proj5.jpg'; //import icon image for project 5
import p6 from '../photos/projectIcons/proj6.jpg'; //import icon image for project 6
import p7 from '../photos/projectIcons/proj7.jpg'; //import icon image for project 7
import p8 from '../photos/projectIcons/proj8.jpg'; //import icon image for project 8
import b1 from '../photos/BeforeAfter/before1.jpg'; // import before image for proj1
import a1 from '../photos/BeforeAfter/after1.jpg';  // import after image for proj1
import b2 from '../photos/BeforeAfter/before2.jpg'; // import before image for proj2
import a2 from '../photos/BeforeAfter/after2.jpg';  // import after image for proj2
import b3 from '../photos/BeforeAfter/before3.jpg'; // import before image for proj3
import a3 from '../photos/BeforeAfter/after3.jpg';  // import after image for proj3
import b4 from '../photos/BeforeAfter/before4.jpg'; // import before image for proj4
import a4 from '../photos/BeforeAfter/after4.jpg';  // import after image for proj4
import {Button, Jumbotron, Modal} from 'react-bootstrap'; // import Button, Jumbotron, and Modal libraries from  react-bootstrap
import BeforeAfterSlider from 'react-before-after-slider'; // import the before and after slider libraries from react-before-after-slider
import '../styles/projectsStyle.css'; // import CSS Style for this page

//Projects class
class Projects extends Component{

    
    constructor(){
        super()
        this.state={
            show1:false,  //if pop-up (Modal) for project 1 is being shown
            show2: false, //if pop-up (Modal) for project 2 is being shown
            show3: false, //if pop-up (Modal) for project 3 is being shown
            show4: false, //if pop-up (Modal) for project 4 is being shown
            show5: false, //if pop-up (Modal) for project 5 is being shown
            show6: false, //if pop-up (Modal) for project 6 is being shown
            show7: false, //if pop-up (Modal) for project 7 is being shown
            show8: false  //if pop-up (Modal) for project 8 is being shown
        }
    }

    //if the shown state of project 1 is true it will be set to false and hidden, otherwise it will be set to true and shown
    showModal1(){
        this.setState({show1:!this.state.show1})
    }

    //if the shown state of project 2 is true it will be set to false and hidden, otherwise it will be set to true and shown
    showModal2(){
        this.setState({show2:!this.state.show2})
    }

    //if the shown state of project 3 is true it will be set to false and hidden, otherwise it will be set to true and shown
    showModal3(){
        this.setState({show3:!this.state.show3})
    }

    //if the shown state of project 4 is true it will be set to false and hidden, otherwise it will be set to true and shown
    showModal4(){
        this.setState({show4:!this.state.show4})
    }

    //if the shown state of project 5 is true it will be set to false and hidden, otherwise it will be set to true and shown
    showModal5(){
        this.setState({show5:!this.state.show5})
    }

    //if the shown state of project 6 is true it will be set to false and hidden, otherwise it will be set to true and shown
    showModal6(){
        this.setState({show6:!this.state.show6})
    }

    //if the shown state of project 7 is true it will be set to false and hidden, otherwise it will be set to true and shown
    showModal7(){
        this.setState({show7:!this.state.show7})
    }

    //if the shown state of project 8 is true it will be set to false and hidden, otherwise it will be set to true and shown
    showModal8(){
        this.setState({show8:!this.state.show8})
    }

    render(){
        return(
            <Jumbotron id="JtronProjects">
                <h1 id="ProjTitle">O Projekti</h1>
                <div id="projectsTABLE">
                    <div class="row">
                        <div class="column">
                            <div class="hovereffect">
                                <img class="img-responsive" src={p1} alt="Project 1"/>
                                <div class="overlay">
                                    <h2>Lindor Kuca</h2>
                                    <button class="info" onClick={()=>{this.showModal1()}}>View Project</button>
                                </div>
                            </div>
                        </div>
                        <Modal 
                        dialogClassName="mw"
                        show={this.state.show1} 
                        onHide={()=>{this.showModal1()}} 
                        
                        //size="xl"
                        >
                            <Modal.Header closeButton>Project Gallery</Modal.Header>
                            <Modal.Body>
                                <img class = "modalImage" src={p1} alt="Project 1 opener"/>
                                This image Lorem Ipsum
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
                                    <button class="info" onClick={()=>{this.showModal2()}}>View Project</button>
                                </div>
                            </div>
                        </div>
                        <Modal 
                        dialogClassName="mw"
                        show={this.state.show2} 
                        onHide={()=>{this.showModal2()}} 
                        >
                            <Modal.Header closeButton>Project Gallery</Modal.Header>
                            <Modal.Body>
                                <img class = "modalImage" src={p2} alt="Project 2 opener"/>
                                This image Lorem Ipsum
                                Before and After Slider Below!
                                <BeforeAfterSlider
                                    before={b1}
                                    after={a1}
                                    width={960}
                                    height={720}
                                    defaultProgress	={0.1}
                                    id="slider1"
                                />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={()=>{this.showModal2()}}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <div class="column">
                            <div class="hovereffect">
                                <img class="img-responsive" src={p3} alt="Project 3"/>
                                <div class="overlay">
                                    <h2>Light Modern</h2>
                                    <button class="info" onClick={()=>{this.showModal3()}}>View Project</button>
                                </div>
                            </div>
                        </div>
                        <Modal 
                        dialogClassName="mw"
                        show={this.state.show3} 
                        onHide={()=>{this.showModal3()}} 
                        >
                            <Modal.Header closeButton>Project Gallery</Modal.Header>
                            <Modal.Body>
                                <img class = "modalImage" src={p3} alt="Project 3 opener"/>
                                This image Lorem Ipsum
                                <BeforeAfterSlider
                                    before={b4}
                                    after={a4}
                                    width={1000}
                                    height={664}
                                    defaultProgress	={0.1}
                                    id="slider4"
                                />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={()=>{this.showModal3()}}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <div class="column">
                            <div class="hovereffect">
                                <img class="img-responsive" src={p4} alt="Project 4"/>
                                <div class="overlay">
                                    <h2>Amaze Sides</h2>
                                    <button class="info" onClick={()=>{this.showModal4()}}>View Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal 
                        dialogClassName="mw"
                        show={this.state.show4} 
                        onHide={()=>{this.showModal4()}} 
                        >
                            <Modal.Header closeButton>Project Gallery</Modal.Header>
                            <Modal.Body>
                                <img class = "modalImage" src={p4} alt="Project 4 opener"/>
                                This image Lorem Ipsum
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={()=>{this.showModal4()}}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    <div class="row">
                        <div class="column">
                            <div class="hovereffect">
                                <img class="img-responsive" id="left2" src={p5} alt="Project 5"/>
                                <div class="overlay">
                                    <h2>Enlight Living</h2>
                                    <button class="info" onClick={()=>{this.showModal5()}}>View Project</button>
                                </div>
                            </div>
                        </div>
                        <Modal 
                        dialogClassName="mw"
                        show={this.state.show5} 
                        onHide={()=>{this.showModal5()}} 
                        >
                            <Modal.Header closeButton>Project Gallery</Modal.Header>
                            <Modal.Body>
                                <img class = "modalImage" src={p5} alt="Project 5 opener"/>
                                This image Lorem Ipsum
                                <BeforeAfterSlider
                                    before={b2}
                                    after={a2}
                                    width={960}
                                    height={720}
                                    defaultProgress	={0.1}
                                    id="slider2"
                                />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={()=>{this.showModal5()}}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <div class="column">
                            <div class="hovereffect">
                                <img class="img-responsive" src={p6} alt="Project 6"/>
                                <div class="overlay">
                                    <h2>Sustauns Project</h2>
                                    <button class="info" onClick={()=>{this.showModal6()}}>View Project</button>
                                </div>
                            </div>
                        </div>
                        <Modal 
                        dialogClassName="mw"
                        show={this.state.show6} 
                        onHide={()=>{this.showModal6()}} 
                        >
                            <Modal.Header closeButton>Project Gallery</Modal.Header>
                            <Modal.Body>
                                <img class = "modalImage" src={p6} alt="Project 6 opener"/>
                                This image Lorem Ipsum
                                <BeforeAfterSlider
                                    before={b3}
                                    after={a3}
                                    width={960}
                                    height={720}
                                    defaultProgress	={0.1}
                                    id="slider3"
                                />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={()=>{this.showModal6()}}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <div class="column">
                            <div class="hovereffect">
                                <img class="img-responsive" src={p7} alt="Project 7"/>
                                <div class="overlay">
                                    <h2>Aurelianus</h2>
                                    <button class="info" onClick={()=>{this.showModal7()}}>View Project</button>
                                </div>
                            </div>
                        </div>
                        <Modal 
                        dialogClassName="mw"
                        show={this.state.show7} 
                        onHide={()=>{this.showModal7()}} 
                        >
                            <Modal.Header closeButton>Project Gallery</Modal.Header>
                            <Modal.Body>
                                <img class = "modalImage" src={p7} alt="Project 7 opener"/>
                                This image Lorem Ipsum
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={()=>{this.showModal7()}}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <div class="column">
                            <div class="hovereffect">
                                <img class="img-responsive" src={p8} alt="Project 8"/>
                                <div class="overlay">
                                    <h2>Cladius Offices</h2>
                                    <button class="info" onClick={()=>{this.showModal8()}}>View Project</button>
                                </div>
                            </div>
                        </div>
                        <Modal 
                        dialogClassName="mw"
                        show={this.state.show8} 
                        onHide={()=>{this.showModal8()}} 
                        >
                            <Modal.Header closeButton>Project Gallery</Modal.Header>
                            <Modal.Body>
                                <img class = "modalImage" src={p8} alt="Project 8 opener"/>
                                This image Lorem Ipsum
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={()=>{this.showModal8()}}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </Jumbotron>
        )
    }
}
    
export default Projects;