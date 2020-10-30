import React from 'react'
import {Jumbotron, Modal, Button} from 'react-bootstrap'
import '../styles/footerStyle.css';

export default class Footer extends React.Component {

    constructor(){
        super()
        this.state={
            show:false
        }
    }

    state = {
        pass: ""
      }

    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
          [name]: value,
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        if(this.state.pass === "12345"){
            document.getElementById("modalBody").innerHTML = "Welcome";
            document.getElementById("modalBody").style.color = "Black";
            window.open('http://localhost:8000/adminPage', '_blank');
        }
        else{
            document.getElementById("modalBody").innerHTML = "Error, Incorrect Password";
            document.getElementById("modalBody").style.color = "red";
        }
    }

    showModal = () => {
        this.setState({show:!this.state.show})
    }

    render(){
        return(
            <Jumbotron id="footerJ">
                <p id='adminLogin' onClick={()=>{this.showModal()}}>admin login</p>

                <Modal 
                        dialogClassName="mw"
                        show={this.state.show} 
                        onHide={()=>{this.showModal()}} 
                        
                        aria-labelledby="contained-modal-title-vcenter"
                        dialogClassName="modal-40w"
                        centered
                        >
                            <Modal.Header closeButton>Admin Login</Modal.Header>

                            <form onSubmit={this.handleSubmit}>
                                <Modal.Body>
                                    <p id="modalBody"> Please Enter the Admin Password</p>
                                    

                                    <input
                                        type="password"
                                        id="Pass"
                                        name="pass"
                                        placeholder='Enter Password'
                                        value={this.state.tel}
                                        onChange={this.handleInputChange}
                                        required
                                     ></input><br></br>
                                </Modal.Body>

                                <Modal.Footer>
                                    
                                    <Button variant="primary" type="submit">
                                        Login
                                    </Button>
                                    <Button variant="secondary" onClick={()=>{this.showModal()}}>
                                        Close
                                    </Button>

                                </Modal.Footer>
                            </form>
                            
                        </Modal>

            
            </Jumbotron>
        )
    }
}

