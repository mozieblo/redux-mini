import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import * as actionTypes from '../store/actions';

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.addPersonHandler} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.deletePersonHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      persons: state.persons
    }
};

const mapDispatchToProps = (dispatch) => {
      return {
        addPersonHandler: () => dispatch({ type: actionTypes.ADD_PERSON }),
        deletePersonHandler: (personId) => dispatch({ type: actionTypes.DELETE_PERSON, id: personId })
      }
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);