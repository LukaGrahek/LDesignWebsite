// admin
// Handles the html elements and functions for the adminpage:
// - displays databse
// - sorts the database
// - allows for updating the client database
// - allows for deletion of client database elements

import React from 'react'; // Imports react framework
import axios from 'axios'; // Imports axios (sends xml http requests)
import { Modal, Button } from 'react-bootstrap' // Imports for modal (pop up), and react's own button

import '../styles/adminStyle.css' // Imports styling

let shown = true;
let createdSort1 = false;

export default class Admin extends React.Component {

    renderTable = true;

    constructor(props) {
        super(props);
        this.state = {
            message: "",
            good: ""
        }
    }


    state = {
        name: "", // Stores the value of the name input field
        email: "", // Stores the value of the email input field
        tel: "", // Stores the value of the tel input field
        mes: "", // Stores the value of the messsage input field
        id: "", // Stores the value of the Id input field
        status: "" // Stores the value of the status drop down selector
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

    // When the submit button is pressed on the edit database section, call the updateData function with values of each input
    handleSubmit = event => {
        event.preventDefault();
        this.updateData(this.state.id, this.state.name, this.state.email, this.state.tel, this.state.mes, this.state.status);


    }

    // Shows the popup confriming whether or not to delete selected database element
    showModal(){
        this.setState({show:!this.state.show})
    }

    // Deletes the database objet based on the inputted id value
    handleDelete = () => {
        
        axios.delete(`http://localhost:3000/${this.state.id}`, { // Sends delete request to rest api

        });
        window.location.reload(false); // Reloads the page
    }

    // Updates the data of a select database element based on id to new inputted values
    updateData = (id, updatename, updateemail, updatephone, updatemessage, updatestatus) => {

        if (updatename !== "") { // If a new name value is enetered, update the name in the database
            axios.patch(`http://localhost:3000/${id}`, {
                name: updatename

            })
        }
        if (updateemail !== "") { // If a new email value is entered, update the email in the database
            axios.patch(`http://localhost:3000/${id}`, {
                email: updateemail

            })
        }
        if (updatephone !== "") { // If a new phone number value is entered, update the phone number in the database
            axios.patch(`http://localhost:3000/${id}`, {
                phone: updatephone

            })
        }
        if (updatemessage !== "") { // If a new message value is entered, update the message in the database
            axios.patch(`http://localhost:3000/${id}`, {
                message: updatemessage


            })
        }
        if (updatestatus !== "") { // If a new status is selected, update the status in the database
            axios.patch(`http://localhost:3000/${id}`, {
                status: updatestatus

            })
        }


        window.location.reload(false); // Reload the page
    }

    // Retrieves data from database and generates table using data
    getData = () => { 
        if(!createdSort1){
            axios.get('http://localhost:3000').then(response => { // Retrieves all data from database
                let table = document.getElementById("firstTable");
                let data = response.data;

                this.generateTable(table, data); // Calls generateTable function with inputs of the table being edited and the data to be used
            });
        }
    }

    // Retrieves data from database and generates the sorted table using table
    getSortedData = () => {
        if(!createdSort1){ // If the sorted table has not been created, create it
            axios.get('http://localhost:3000').then(response => {
                let table2 = document.getElementById("sortedTable");
                let data = response.data;

                this.generateTable(table2,data.reverse()); // Calls generateTable function with inputs of table being edited and data(reversed) to be used
                table2.style.display = "none";
            });
            createdSort1 = true;
        }
    }

    sortByDate = (data) =>{
        
        for(let element of data){
            let newDate = ""
            for(let i = 0; i < element.date.length; i++){
                if (element.date.charAt(i) >= '0' && element.date.charAt(i) <= '9') {
                   newDate += element.date.charAt(i);
                }
            }
            element.date = parseInt(newDate);
        }
        let sorted = data.sort(function(a, b) {return a.date - b.date})
        sorted = data.reverse();
        return sorted;
    }

    // Generates inputted table with inputted data
    generateTable = (table, data) => {

        if (this.renderTable == true) { // If a table has not yet been rendered, render table
            for (let element of data) { // Inputs data into table
                let row = table.insertRow();
                let _id = data._id;
                for (_id in element) {
                    if (_id !== "__v") { //Skips adding version to the table
                        let cell = row.insertCell();
                        let text = document.createTextNode(element[_id]);
                        cell.appendChild(text);
                    }
                }
            }
        }
    }

    sortDateButton = () =>{
        if(shown === false){
            let table2 = document.getElementById("sortedTable");
            let table = document.getElementById("firstTable");
            table.style.display = "inline";
            table2.style.display = "none";
            shown = true;
        }
        else{
            let table2 = document.getElementById("sortedTable");
            let table = document.getElementById("firstTable");
            table2.style.display = "inline";
            table.style.display = "none";
            shown = false;
        }
    }

    //Renders admin elements
    render() {
        return (
            <div id="adminDiv" >

                <Modal
                    dialogClassName="mw"
                    show={this.state.show}
                    onHide={() => { this.showModal() }}

                    aria-labelledby="contained-modal-title-vcenter"
                    dialogClassName="modal-40w"
                    centered
                >
                    <Modal.Header>Are You Sure?</Modal.Header>

                    <Modal.Footer>

                        <Button variant="primary" onClick={() => { this.showModal(); this.handleDelete() }}>
                            Yes
                                    </Button>
                        <Button variant="secondary" onClick={() => { this.showModal() }}>
                            No
                                    </Button>

                    </Modal.Footer>

                </Modal>

                <h1>Admin Page</h1>
                <table id="firstTable" class="adminElements">
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
                            Date <button onClick = {this.sortDateButton}>sort</button>
                        </th>
                    </tr>
                    {this.getData()}
                </table>

                <table id="sortedTable" class="adminElements">
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
                            Date <button onClick = {this.sortDateButton}>sort</button>
                        </th>
                    </tr>
                    {this.getSortedData()}
                </table>



                <div id="editSection" class="adminElements">
                    <h3>Edit Data</h3>
                    <form onSubmit={this.handleSubmit}>
                        <table id='editSubmission'>
                            <tr>
                                <th>
                                    <input
                                        type="text"
                                        id="Id"
                                        name="id"
                                        placeholder='Client ID'
                                        value={this.state.id}
                                        onChange={this.handleInputChange}
                                        required
                                    ></input><br></br>

                                    <select value={this.state.value} name="status" id="Status" onChange={this.handleInputChange}>
                                        <option>Status</option>
                                        <option value="Ongoing">Ongoing</option>
                                        <option value="Complete">Complete</option>
                                    </select><br></br>

                                    <input
                                        type="text"
                                        id="Name"
                                        name="name"
                                        placeholder='Name (Leave Blank For No Change)'
                                        value={this.state.name}
                                        onChange={this.handleInputChange}
                                    ></input><br></br>

                                    <input
                                        type="email"
                                        id="Email"
                                        name="email"
                                        placeholder='Email (Leave Blank For No Change)'
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                    ></input><br></br>

                                    <input
                                        type="tel"
                                        id="Phone"
                                        name="tel"
                                        placeholder='Phone (Leave Blank For No Change)'
                                        value={this.state.tel}
                                        onChange={this.handleInputChange}
                                    ></input><br></br>

                                    <textarea
                                        class="Message"
                                        name="mes"
                                        placeholder='Message (max 5000 characters)'
                                        maxlength="5000"
                                        value={this.state.mes}
                                        onChange={this.handleInputChange}
                                    ></textarea><br></br>

                                    <Button
                                        type="submit"
                                        id="SubmitButton"
                                        value="Submit"
                                    >Submit</Button>
                                    <Button onClick={()=>{this.showModal()}}
                                        id="DeleteButton"
                                    >Delete</Button>
                                </th>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>

        )
    }
}