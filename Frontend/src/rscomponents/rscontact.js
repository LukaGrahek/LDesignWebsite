/**
 * Contact Section:
 * Stores html elements of the website contact section and its functionalities:
 * Takes contact inormation from clients and inputs them into database
 */
import React from 'react'; // Import react framework
import axios from 'axios'; // Imports axios (sends xml http requests)
import ReCAPTCHA from "react-google-recaptcha"; // Imports ReCAPTCHA api

import '../styles/contactStyle.css' // Imports styling

const recaptchaRef = React.createRef(); // ref for the ReCaptcha

let recapVal = false; // wether or not the ReCaptcha has been succesfully completed
let keep = "hidden"; // wether or not the ReCaptcha is being displayed

//This function checks the validity of the phonenumber inpputed by the user
function phonenumber(c){
    let count = 0; //this counts the amount of numbers inputted by the user. 10-16 numbers are allowed
    for (let position = 0; position < c.length; position++) { //for each character from the users input

        /**
         * 1 is added to the character incase it is a 0, when moduloed by 13, any number will produce a value greater than 0.
         * This is used to check whether or not the chracter is a number, as a non-number would return the value NaN (not a number)
         * If the space is left blank, it will be counted as a 0, so there is an added  && to make sure that  spaces are being counted as
         * a number.
         */
       if ((c.charAt(position)+1)%13>0 && c.charAt(position)%13 != NaN && c.charAt(position) != " ")
         {
            count += 1;
         }
        //sometimes the number 9 is counted as a string, this makes sure that 9 is counted as a number.
        if(c.charAt(position) === "9"){
            count += 1;
        }
     }
    //if the uppercase version of the user's input is different to the lowercase version that measn that there are letters, and the phone number is invalid
    //if the number count is less than 10 or more than 16 this is an invalid phone number
    if(c.toLowerCase() === c.toUpperCase() && count>=10 && count<=16){
        return true;
    } 
    else{
        return false;
    }
}

function nameCheck(c){
    let count = 0;// amount of letters or symbols in the users name input (must remain 0 to be a valid name)
    for (let position = 0; position < c.length; position++) { // for every chracter in the users input in the name box

       //if the chracter lower case is equal to itself as an uppracase, that means that it is either a symbol or number and the name is invalid
       //spaces are allowed in the name box, and are excluded.
       if (c.charAt(position).toLowerCase() === c.charAt(position).toUpperCase() && c.charAt(position) != " ")
         {
            count += 1;
         }
     }

    //if there are no numbers or symbols in the users name, it will count as a valid name, otherwise the name will not be accepted.
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
        this.recaptchaRef = React.createRef(); //creates the ref for the ReCaptcha
        this.state = {
            message: "", // red message displayed to the user if any input field or request (ReCaptcha) is invalid.
            good: "" //success and thank you message to be displayed to the user upon completion of their submition.
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
        var x = document.getElementById("recapid"); //HTML ReCaptcha element (used to hide and show the ReCaptcha)
        
        //if the submit button is pressed when the ReCaptcha is hidden, it will be displayed with a message indicated the user to complete it
        if (keep === "hidden") {
            //if ReCaptcha is not already complete if will display the please complete message
            if(!recapVal){
                this.setState({ good: "Please complete the reCAPTCHA"});
            }
            console.log("hello " + keep);
            keep = "visible";
            x.style.visibility = "visible";
           
        } else { // if the submit button is pressed and the ReCaptcha IS displayed

            //if the ReCaptcha still is not complete the user will be asked to complete it
            if(!recapVal){
            this.setState({ good: "Please complete the reCAPTCHA"});
            }

            // If all the input fields are valid, and the ReCaptcha is complete, the form will be sent to the database
            if(phonenumber(this.state.tel) && nameCheck(this.state.name) && recapVal){ 
                this.setState({ good: ""});
                this.setState({ message: ""});
                this.sendData(this.state.name, this.state.email, this.state.tel, this.state.mes);
                console.log("sent data");
                this.resetCaptcha();
                x.style.visibility = "hidden";
                keep = "hidden";
                recapVal = false;
            }
            //if any field or ReCaptcha is invalid
            else{
                this.setState({ good: ""});

                if(!nameCheck(this.state.name)){  // If the name is invalid, warns user to enter a proper name
                    this.setState({ message: "Please enter a proper name."});
                }

                if(!phonenumber(this.state.tel)){ // If the phone number is invalid, warns user to enter a proper phone number
                    this.setState({ message: "Please enter a proper phone number."});
                }

                if(!recapVal){ // If ReCaptcha is not completed, warns user to complete the recaptcha
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

    //When the Recaptcha is succesfully complete
    onChange() {
        recapVal =true;
        console.log("ReCaptcha Complete");

    }

    // Resets recaptcha
    resetCaptcha() {
        const recaptchaValue = recaptchaRef.current.reset();
        //this.props.resetCaptcha(recaptchaValue);
    }

    // Renders contact elementss
    render() {
        return (
        <div class='contactSection'>
            <h1>Kontaktiraj Me</h1>
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
                                placeholder='Tvoje Ime'
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                required
                            ></input><br></br>

                            <input
                                type="email"
                                id="Email"
                                name="email"
                                placeholder='Tvoj Email'
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                required
                            ></input><br></br>

                            <input
                                type="tel"
                                id="Phone"
                                name="tel"
                                placeholder='Tvoj Telefonski Broj'
                                value={this.state.tel}
                                onChange={this.handleInputChange}
                                required
                            ></input><br></br>

                            <input
                                type="submit"
                                id="SubmitButton"
                                value="Kompletan"
                            ></input>
                            <p id="errorMessage">{ this.state.message }</p>
                            <p id="goodMessage">{ this.state.good }</p>
                        </th>
                        <th>
                            <textarea
                                class="Message"
                                name="mes"
                                placeholder='Tvoj Poruka (max 5000 slovo)'
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