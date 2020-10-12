import React from 'react';
import '../styles/contactStyle.css'

const Contact = () => {
    return (
        <div class='contactSection'>
            <h1>Contact Us</h1>
            <table>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>
                    <input type="text" id="Name" placeholder='Your Name'></input><br></br>
                    <input type="email" id="Email" placeholder='Your Email'></input><br></br>
                    <input type="tel" id="Phone" placeholder='Your Phone'></input>
                    </th>
                    <th>
                        <input type="text" id="PostalCode" placeholder='Your Message (max 500 characters)' maxlength="500"></input>
                    </th>
                    <th>
                        <p>Phone</p>
                        <p>Email</p>
                        <p>Address</p>
                    </th>

                </tr>

            </table>
        </div>
    )
}

export default Contact