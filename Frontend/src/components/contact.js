// contact
// Stores html elements of the website contact section and its functionalities:
// - Takes contact inormation from clients and inputs them into database

import React from 'react'; // Import react framework
import axios from 'axios'; // Imports axios (sends xml http requests)
import ReCAPTCHA from "react-google-recaptcha"; // Imports ReCAPTCHA api

import '../styles/contactStyle.css' // Imports styling

const recaptchaRef = React.createRef();

let recapVal = false;
let keep = "hidden";
function phonenumber(c){
    let count = 0;
    for (let position = 0; position < c.length; position++) {
      
       if ((c.charAt(position)+1)%13>0 && c.charAt(position)%13 != NaN && c.charAt(position) != " ")
         {
            count += 1;

         }
         
        if(c.charAt(position) === "9"){

            count += 1;
        }
     }

    if(c.toLowerCase() === c.toUpperCase() && count>=10 && count<=16){

        return true;
    } 
    else{

      
        return false;
    }
}

function nameCheck(c){
    let count = 0;
    for (let position = 0; position < c.length; position++) {
      
       if (c.charAt(position).toLowerCase() === c.charAt(position).toUpperCase() && c.charAt(position) != " ")
         {
            count += 1;

         }
     }

    if(count === 0){

        return true;
    } 
    else{
      
        return false;
    }
}


export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.recaptchaRef = React.createRef();
        this.state = {
            message: "",
            good: ""
        }
      }
 
      
    state = {
        name: "", // Stores the value of the name input field
        email: "", // Stores the value of the email input field
        tel: "", // Stores the value of the tel input field
        mes: "" // Stores the value of the message input field
      }

    // Whenever something is changed to any inputs, the change is saved to the variable storing the info
    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
          [name]: value,
        })
    }

    // When the submit button is pressed, check if correct data is entered, display recaptcha, once all is complete, send data to database
    handleSubmit = event => {
        event.preventDefault()
        var x = document.getElementById("recapid");
        

        if (keep === "hidden") {
            if(!recapVal){
                this.setState({ good: "Please complete the reCAPTCHA"});
            }
            console.log("hello " + keep);
            keep = "visible";
            x.style.visibility = "visible";
            
        } else {
            if(!recapVal){
            this.setState({ good: "Please complete the reCAPTCHA"});
            }
            if(phonenumber(this.state.tel) && nameCheck(this.state.name) && recapVal){ // If all the data is correct and recaptcha is complete, send data to databse
                this.setState({ good: ""});
                this.setState({ message: ""});
                this.sendData(this.state.name, this.state.email, this.state.tel, this.state.mes);
                console.log("sent data");
                this.resetCaptcha();
                x.style.visibility = "hidden";
                keep = "hidden";
                recapVal = false;
            }
            else{
                this.setState({ good: ""});

                if(!nameCheck(this.state.name)){  // If the name does not make sense, warns user to enter a proper name
                    this.setState({ message: "Please enter a proper name."});

                }

                if(!phonenumber(this.state.tel)){ // If the phone number does not make sense, warns user to enter a proper phone number
                    
                    this.setState({ message: "Please enter a proper phone number."});

                }

                if(!recapVal){ // If recaptcha is not completed, warns user to complete the recaptcha
                    this.setState({ message: "Please complete the reCAPTCHA."});

                }
            } 
        }
    }

    // Sends the inputted name, email, phone nubmer, and message to the database
      sendData = (submitname, submitemail, submitphone, submitmessage) => {
        
        axios.post('http://localhost:3000', { // sends xml http post request to rest api
            name: submitname,
            email: submitemail,
            phone: submitphone,
            message: submitmessage
        })
        .then(response => {

            this.setState({ good: "Your form has been sent succesfully, Thank You."}); // Thanks user for input

            console.log(response);
        })
        .catch(err => {
            console.log(err);
            this.setState({ message: "There was an error sending your form. Try again or use the contact information on the right of the screen."}); // Warns user if error occured
        });
    };

    // 
    onChange() {
        recapVal =true;
        console.log("ReCaptcha Complete");

    }

    // resets recaptcha
    resetCaptcha() {
        const recaptchaValue = recaptchaRef.current.reset();
        //this.props.resetCaptcha(recaptchaValue);
    }

    //Renders contact elementss
    render() {
        return (
        <div class='contactSection'>
            <h1>Contact Us</h1>
            <form onSubmit={this.handleSubmit}>
                <table id='contactSubmission'>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>
                            <input
                                type="text"
                                id="Name"
                                name="name"
                                placeholder='Your Name'
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                required
                            ></input><br></br>

                            <input
                                type="email"
                                id="Email"
                                name="email"
                                placeholder='Your Email'
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                required
                            ></input><br></br>

                            <input
                                type="tel"
                                id="Phone"
                                name="tel"
                                placeholder='Your Phone'
                                value={this.state.tel}
                                onChange={this.handleInputChange}
                                required
                            ></input><br></br>

                            <input
                                type="submit"
                                id="SubmitButton"
                                value="Submit"
                            ></input>
                            <p id="errorMessage">{ this.state.message }</p>
                            <p id="goodMessage">{ this.state.good }</p>
                        </th>
                        <th>
                            <textarea
                                class="Message"
                                name="mes"
                                placeholder='Your Message (max 5000 characters)'
                                maxlength="5000"
                                value={this.state.mes}
                                onChange={this.handleInputChange}
                            ></textarea>      

                            <ReCAPTCHA

                                id = "recapid"
                                ref={recaptchaRef}
                                sitekey="6LeykdkZAAAAALQRKsIvTA_juBG6toiF-a8y8yRW"
                                onChange={this.onChange}
                            />


                        </th>
                        <th>
                            <div class='contactInfo'>
                                <p>Phone: (555) 555 5555</p>
                                <p>Email: Email@email.com</p>
                                <p>Address: 123 Address Street</p>
                            </div>
                        </th>
                    </tr>
                </table>
            </form>
        </div>
        )
    }
}