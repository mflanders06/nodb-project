import React, {Component} from 'react';
import axios from 'axios';

import './index.css';
import './main.css';

import List from './components/List'
import AddTicket from './components/AddTicket'



class App extends Component{
    constructor(){
        super();
        this.state = {
            tickets:[],
            note:""
        };
        this.insertTicket = this.insertTicket.bind(this);
        this.insertNote = this.insertNote.bind(this);
        this.handleNoteChange = this.handleNoteChange.bind(this);
    }

    componentDidMount(){
        axios 
            .get('/api/tickets')
            .then((response) =>{
                this.setState({ tickets: response.data })
            })
            .catch();        
    }

    refreshList(){
        axios 
        .get('/api/tickets')
        .then((response) =>{
            this.setState({ tickets: response.data })
        })
        .catch();
    }

    insertTicket(customer, title){
        axios
            .post(`/api/tickets`,{customer: customer, title: title})
            .then((response) => {
                this.setState({ tickets: response.data })
            } )
    }

    insertNote(id){
        const {note} = this.state
        //console.log('this is the id', id, 'this is the note', note)
        axios
            .post(`/api/tickets/notes?id=${id}`, {note: note})
            .then((response) => {
                this.setState({ tickets: response.data, note: "" })
            })
    }

    handleNoteChange(e){
        this.setState({note: e.target.value})
    }

    render(){
        //console.log('The state is:', this.state.tickets);
        return(
            <div>
                <AddTicket insertTicket={this.insertTicket}/>
                <List tickets={this.state.tickets} handleNoteChange={this.handleNoteChange} insertNote={this.insertNote}/>
            </div>
        );
    }
}

export default App;