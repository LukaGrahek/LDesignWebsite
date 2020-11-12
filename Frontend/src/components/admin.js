// admin
// Handles the html elements and functions for the adminpage:
// - displays databse
// - sorts the database
// - allows for updating the client database
// - allows for deletion of client database elements

import React from 'react'; // Imports react framework
import axios from 'axios'; // Imports axios (sends xml http requests)
import { Modal, Button } from 'react-bootstrap' // Imports for modal (pop up), and react's own button
import ReactDOM from 'react-dom'

import '../styles/adminStyle.css' // Imports styling

let shown = true; // the tables are sorted either oldest to newest or newest to oldest, this boolean dictates which one is shown
let createdSort1 = false; //after the tables are made, this will be set to true. The tables can only be made once.

let globalData; //Data gotten from database for sorting use.

let numID = 0; //Id of a specific data form, used for linking the ID select button with the corresponding form

export default class Admin extends React.Component {

    renderTable = true; // if the table has been rendered properly (set to false if there is an error)

    //constructors in order to change message area or good area
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
                globalData = data;
                this.generateTable(table, data, 0); // Calls generateTable function with inputs of the table being edited and the data to be used
            });
        }
    }

    // Retrieves data from database and generates the sorted table using table
    getSortedData = () => {
        if(!createdSort1){ // If the sorted table has not been created, create it
            axios.get('http://localhost:3000').then(response => {
                let table2 = document.getElementById("sortedTable");
                let data = response.data;

                this.generateTable(table2,data.reverse(),1); // Calls generateTable function with inputs of table being edited and data(reversed) to be used
                table2.style.display = "none";
            });
            createdSort1 = true;
        }
    }

    // returns sorted forms by date( oldest to newest)
    sortByDate = (data) =>{
        for(let element of data){  //for each form (each row in the table)
            let newDate = ""       //new date that will be composed only of numbers
            for(let i = 0; i < element.date.length; i++){ //for every charcter of the original date
                if (element.date.charAt(i) >= '0' && element.date.charAt(i) <= '9') { //if that character is a number
                   newDate += element.date.charAt(i); //add the number to the end of the new date string
                }
            }
            element.date = parseInt(newDate); //change the date in the array to the new date that is a number
        }
        let sorted = data.sort(function(a, b) {return a.date - b.date}) //sort the array based on the date values from high to low (newest to oldest)
        sorted = data.reverse(); //create new array that is sorted from oldest to newest
        return sorted;
    }

    // Generates inputted table with inputted data
    generateTable = (table, data, numID) => {

        if (this.renderTable == true) { // If a table has not yet been rendered, render table
            for (let element of data) { // Inputs data into table
                let row = table.insertRow();
                let _id = data._id;
                for (_id in element) {
                    if (_id !== "__v") { //adds Text to the table
                        let cell = row.insertCell(); // table cell
                        let text = document.createTextNode(element[_id]); // text to go into cell
                        cell.appendChild(text);
                    }
                    else{ //Adds ID select radio buttons to the last column of the table
                        
                        let x = //new radio button
                        <input
                        id = {element._id + numID}
                        class= "radioID"
                        type="radio"
                        name = "id"
                        />
                        let c = row.insertCell(); //table cell
                        ReactDOM.render(x,c);
                    }
                }
            }
        }
    }


    //this function checks which radio button has been pressed and fills in the edit data ID text feild with the selected ID
    radioButton = () =>{
        console.log("2");
        for(let element of globalData){ // for table sorted Oldest to Newest, go through each button and find which one is checked
            if(document.getElementById(element._id+0).checked){// if a sepcific radio button is pressed, fill in the ID
                document.getElementById("inputId").value = element._id
                this.state.id = element._id
            }
        }
        for(let element of globalData){// for table sorted Newest to Oldest, go through each button and find which one is checked
            if(document.getElementById(element._id+1).checked){// if a sepcific radio button is pressed, fill in the ID
                document.getElementById("inputId").value = element._id
                this.state.id = element._id
            }
        }
    }

    //If a mouse click occurs, this will trigger the radioButton function which checks and acts on if a radio button has been pressed
    componentDidMount(){
        window.addEventListener('click', (event) => {
            this.radioButton();// call function above
          });
        }


    //switches the chart sorting by date between options: oldest to newest, and newest to oldest
    sortDateButton = () =>{
        if(shown === false){ //if the oldest to newest table is shown, it will hide it and show the other table.
            let table2 = document.getElementById("sortedTable");
            let table = document.getElementById("firstTable");
            table.style.display = "inline";
            table2.style.display = "none";
            shown = true;
        }
        else{ // if the newest to oldest table  is shown, it will be hidden and the other table will be revealed.
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
                        <th>
                            Select
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
                        <th>
                            Select
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
                                        id="inputId"
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