import React, {Component} from 'react';
import axios from 'axios';

import List from './components/List'



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
                //console.log(response.data);

                this.setState({ tickets: response.data })
            })
            .catch();
        
    }

    render(){
        //console.log('The state is:', this.state.tickets);
        return(
            <div>
                <List tickets={this.state.tickets}/>
            </div>
        );
    }
}

export default App;