import React from 'react';
import axios from 'axios';
import '../styles/contactStyle.css'

export default class Contact extends React.Component {

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
   //     this.sendData();
        alert(`Welcome ${this.state.name} ${this.state.email} ${this.state.tel} ${this.state.mes}!`);
        
      }

    // componentDidMount = () => {                                                GETS DATA
    //     axios.get('/:postId5f88cbb3bea47c4f843f17be')
    //         .then(() => {
    //             alert('Data is here');
    //         })
    //         .catch(() => {
    //             alert('Data not here');
    //         })
    // }


    // getData = () => {                      ANOTHER WAY TO GET DATA
    //     axios.get('/:postId5f88cbb3bea47c4f843f17be').then(response => {
    //         console.log(response);
    //     });
    // }


    // sendData = () => {
    //     axios.post('http://localhost:3000/infos', {
    //         name: this.state.name,
    //         email: this.state.email,
    //         phone: this.state.tel,
    //         message: this.state.mes
    //     })
    //     .then(response => {
    //         console.log(response);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    // };


    // componentDidMount = () => {
    //     axios.post('/', {
    //         name: this.state.name,
    //         email: this.state.email,
    //         phone: this.state.tel,
    //         message: this.state.mes
    //     })
    //     .then(response => {
    //         console.log(response);
    //     })
    //     .catch(err => {
    //         console.log(err);
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
                            ></input><br></br>

                            <input
                                type="email"
                                id="Email"
                                name="email"
                                placeholder='Your Email'
                                value={this.state.email}
                                onChange={this.handleInputChange}
                            ></input><br></br>

                            <input
                                type="tel"
                                id="Phone"
                                name="tel"
                                placeholder='Your Phone'
                                value={this.state.tel}
                                onChange={this.handleInputChange}
                            ></input><br></br>

                            <input
                                type="submit"
                                id="SubmitButton"
                                value="Submit"
                            ></input>
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