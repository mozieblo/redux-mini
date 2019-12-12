import React from 'react';
import { Component } from 'react';

import './AddPerson.css';

class addPerson extends Component {
    state = {
        name: '',
        age: ''
    }

    onNameHandler = (event) => {
        const input = event.target.value
        this.setState({ name: input })
    }

    onAgeHandler = (event) => {
        const input = event.target.value
        this.setState({ age: input })
    }
    
    render() {
        return (
            <div className="AddPerson">
                <input type="text" placeholder="Name" onChange={this.onNameHandler}></input>
                <input type="text" placeholder="Age" onChange={this.onAgeHandler}></input>
                <button onClick={() => this.props.personAdded(this.state.name, this.state.age) }>Add Person</button>
            </div>
        );
    }
}
   

export default addPerson;