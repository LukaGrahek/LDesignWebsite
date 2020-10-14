import React from 'react';
import '../styles/contactStyle.css'

const Contact = () => {
    return (
        <div class='contactSection'>
            <h1>Contact Us</h1>
            <table id='contactSubmission'>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>
                    <input type="text" id="Name" placeholder='Your Name'></input><br></br>
                    <input type="email" id="Email" placeholder='Your Email'></input><br></br>
                    <input type="tel" id="Phone" placeholder='Your Phone'></input><br></br>
                    <input type="submit" id="SubmitButton" value="Submit"></input>
                    </th>
                    <th>
                        <textarea class="Message" placeholder='Your Message (max 5000 characters)' maxlength="5000" ></textarea>                                                                                    
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
            
        </div>
    )
}

export default Contact