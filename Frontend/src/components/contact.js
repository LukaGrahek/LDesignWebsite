import React from 'react';
import axios from 'axios';
import '../styles/contactStyle.css'

function phonenumber(c){
    let count = 0;
    for (let position = 0; position < c.length; position++) {
      
       if ((c.charAt(position)+1)%13>0 && c.charAt(position)%13 != NaN && c.charAt(position) != " ")
         {
            count += 1;
            console.log(c.charAt(position)%13 +" Success");
         }
     }

    if(c.toLowerCase() === c.toUpperCase() && count>=10 && count<=16){
        console.log("Pass")
        return true;
    } 
    else{
        console.log("bad" + count )
      
        return false;
    }
}

function nameCheck(c){
    let count = 0;
    for (let position = 0; position < c.length; position++) {
      
       if (c.charAt(position).toLowerCase() === c.charAt(position).toUpperCase() && c.charAt(position) != " ")
         {
            count += 1;
            console.log(c.charAt(position) +" Success");
         }
     }

    if(count === 0){
        console.log("NAMEPass")
        return true;
    } 
    else{
        console.log("NAMEbad" + count )
      
        return false;
    }
}


export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: ""
        }
      }
 
      
    state = {
        name: "",
        email: "",
        tel: "",
        mes: ""
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
        event.preventDefault()
        if(phonenumber(this.state.tel) && nameCheck(this.state.name)){
            this.setState({ message: ""});
            this.sendData(this.state.name, this.state.email, this.state.tel, this.state.mes);
        }
        else{
            if(!nameCheck(this.state.name)){ 
                 this.setState({ message: "Please enter a proper name."});
            }

            if(!phonenumber(this.state.tel)){
                
                this.setState({ message: "Please enter a proper phone number."});
            }
        } 
    }

      sendData = (submitname, submitemail, submitphone, submitmessage) => {
        
        axios.post('http://localhost:3000', {
            name: submitname,
            email: submitemail,
            phone: submitphone,
            message: submitmessage
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });
    };

    // getData = () => {               GET DATA
    //     axios.get('/:postId5f88cbb3bea47c4f843f17be').then(response => {
    //         console.log(response);
    //     });
    // }
    


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