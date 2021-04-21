import React, {Component} from 'react';
import axios from 'axios';

import './index.css';
import './main.css';

import List from './components/List'
import AddTicket from './components/AddTicket'
import Ticket from './components/Ticket'
import Header from './components/Header'



class App extends Component{
    constructor(){
        super();
        this.state = {
            tickets:[]
        };
        this.insertTicket = this.insertTicket.bind(this);
        this.insertNote = this.insertNote.bind(this);
        this.editTicket = this.editTicket.bind(this);
        this.delTicket = this.delTicket.bind(this);
    }

    componentDidMount(){
        axios 
            .get('/api/tickets')
            .then((response) =>{
                this.setState({ tickets: response.data })
            })
            .catch(err => {
                console.log(err, err.response);
            });        
    }

    refreshList(){
        axios 
        .get('/api/tickets')
        .then((response) =>{
            this.setState({ tickets: response.data })
        })
        .catch(err => {
            console.log(err, err.response);
        });
    }

    insertTicket(customer, title){
        axios
            .post(`/api/tickets`,{customer: customer, title: title})
            .then((response) => {
                this.setState({ tickets: response.data })
            } )
            .catch(err => {
                console.log(err, err.response);
            });
    }

    insertNote(id, note){
        //console.log('this is the id', id, 'this is the note', note)
        axios
            .post(`/api/tickets/notes?id=${id}`, {note: note})
            .then((response) => {
                this.setState({ tickets: response.data })
            })
            .catch(err => {
                console.log(err, err.response);
            });
    }

    editTicket(id, customer, title){
        axios
            .put(`/api/tickets/${id}`, {customer: customer, title: title})
            .then((response) => {
                this.setState({ tickets: response.data })
            })
            .catch(err => {
                console.log(err, err.response);
            });
    }

    delTicket(id){
        axios
            .delete(`/api/tickets/${id}`)
            .then((response) => {
                this.setState({ tickets: response.data })
            })
            .catch(err => {
                console.log(err, err.response);
            });
    }

    render(){
        //console.log('The state is:', this.state.tickets);
        return(
            <div>
                <Header />
                <AddTicket insertTicket={this.insertTicket}/>
                <List tickets={this.state.tickets} handleNoteChange={this.handleNoteChange} />
                <Ticket tickets={this.state.tickets} insertNote={this.insertNote} editTicket={this.editTicket} delTicket={this.delTicket}/>
            </div>
        );
    }
}

export default App;