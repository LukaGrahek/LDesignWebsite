import React from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap'

import '../styles/adminStyle.css'

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
        name: "",
        email: "",
        tel: "",
        mes: "",
        id: "",
        status: ""
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
        event.preventDefault();
        this.updateData(this.state.id, this.state.name, this.state.email, this.state.tel, this.state.mes, this.state.status);


    }

    showModal(){
        this.setState({show:!this.state.show})
    }

    handleDelete = () => {
        
        axios.delete(`http://localhost:3000/${this.state.id}`, {

        });
        window.location.reload(false);
    }

    updateData = (id, updatename, updateemail, updatephone, updatemessage, updatestatus) => {

        if (updatename !== "") {
            axios.patch(`http://localhost:3000/${id}`, {
                name: updatename

            })
        }
        if (updateemail !== "") {
            axios.patch(`http://localhost:3000/${id}`, {
                email: updateemail

            })
        }
        if (updatephone !== "") {
            axios.patch(`http://localhost:3000/${id}`, {
                phone: updatephone

            })
        }
        if (updatemessage !== "") {
            axios.patch(`http://localhost:3000/${id}`, {
                message: updatemessage


            })
        }
        if (updatestatus !== "") {
            axios.patch(`http://localhost:3000/${id}`, {
                status: updatestatus

            })
        }


        window.location.reload(false);
    }

    getData = () => {
        axios.get('http://localhost:3000').then(response => {
            let table = document.getElementById("firstTable"); //gets table location from index.html
            let data = response.data;

            this.generateTable(table, data);

        });
    }

    generateTable = (table, data) => {

        if (this.renderTable == true) {
            for (let element of data) {
                let row = table.insertRow();
                let _id = data._id;
                for (_id in element) {
                    if (_id !== "__v") {
                        let cell = row.insertCell();
                        let text = document.createTextNode(element[_id]);
                        cell.appendChild(text);
                    }
                }
            }
            this.renderTable = false;
        }
    }

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
                            Date
                        </th>
                    </tr>
                    {this.getData()}
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