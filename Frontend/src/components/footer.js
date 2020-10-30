//footer.js
//Stores the HTML elements of the website footer and its functionalities:
// - Admin login button; redirects you to admin page if credentials are correct

import React from 'react' //import for react framework
import { Jumbotron, Modal, Button } from 'react-bootstrap' // import for jumbotron, modal (pop up), and reacts own button
import '../styles/footerStyle.css'; //imports styling

export default class Footer extends React.Component {

    constructor() {
        super()
        this.state = {
            show: false
        }
    }

    state = {
        pass: "" //stores the value of the password input field
    }

    //Whenever something is changed to any inputs, the change is saved to the variable storing the info
    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value, //updates the changed variable to its new value
        })
    }

    //When the submit button is pressed, this checks if the password is correct and redirect user if so, and warns them if not
    handleSubmit = event => {
        event.preventDefault();
        if (this.state.pass === process.env.ADMIN_PASSWORD) { // checks if entered password is correct
            document.getElementById("modalBody").innerHTML = "Welcome";
            document.getElementById("modalBody").style.color = "Black";
            window.open('http://localhost:8000/adminPage', '_blank'); // opens adminPage in new tab
        }
        else { //warns user the password is incorrect
            document.getElementById("modalBody").innerHTML = "Error, Incorrect Password";
            document.getElementById("modalBody").style.color = "red";
        }
    }

    //Function to display the admin login popup
    showModal = () => {
        this.setState({ show: !this.state.show })
    }

    render() {
        return (
            <Jumbotron id="footerJ">
                <p id='adminLogin' onClick={() => { this.showModal() }}>admin login</p>

                <Modal
                    dialogClassName="mw"
                    show={this.state.show}
                    onHide={() => { this.showModal() }}

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
                            <Button variant="secondary" onClick={() => { this.showModal() }}>
                                Close
                                    </Button>

                        </Modal.Footer>
                    </form>

                </Modal>


            </Jumbotron>
        )
    }
}

