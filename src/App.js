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
            tickets:[]
        };

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

    render(){
        //console.log('The state is:', this.state.tickets);
        return(
            <div>
                <AddTicket />
                <List tickets={this.state.tickets}/>
            </div>
        );
    }
}

export default App;