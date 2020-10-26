import React from 'react';
import axios from 'axios';

import '../styles/adminStyle.css'

export default class Admin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "",
            good: ""
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
    }
        


    //   sendData = (submitname, submitemail, submitphone, submitmessage) => {
        
    //     axios.post('http://localhost:3000', {
    //         name: submitname,
    //         email: submitemail,
    //         phone: submitphone,
    //         message: submitmessage
    //     })
    //     .then(response => {

    //         this.setState({ good: "Your form has been sent succesfully, Thank You."});

    //         console.log(response);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         this.setState({ message: "There was an error sending your form. Try again or use the contact information on the right of the screen."});
    //     });
    // };

    getData = () => {
        axios.get('http://localhost:3000').then(response => {
            let table = document.getElementById("firstTable"); //gets table location from index.html
            let data = response.data;

            console.log(data[2]);

            this.generateTable(table, data);

        });
    }
    
    generateTable = (table, data) =>{
        for (let element of data) {
          let row = table.insertRow();
          let _id = data._id;
          for (_id in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[_id]);
            cell.appendChild(text);
          }
        }
      }

    
    
    

    render() {
        return (
            <div id="adminDiv">
                <h1>Admin Page</h1>
                <table id="firstTable">
                    <tr>
                        <th>
                            Message
                        </th>
                        <th>
                            Status
                        </th>
                        <th>
                            ID
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Phone
                        </th>
                        <th>
                            Date
                        </th>
                        <th>
                            # of Updates
                        </th>
                    </tr>
                    {this.getData()}
                </table>
            </div>
        
        )
    }
}