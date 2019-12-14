import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import * as actionCreators from '../store/actions';

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
        // addPersonHandler: (name, age) => dispatch({ type: actionTypes.ADD_PERSON, personData: { name, age } }),
        // deletePersonHandler: (personId) => dispatch({ type: actionTypes.DELETE_PERSON, id: personId })
        addPersonHandler: ( name, age ) => dispatch(actionCreators.addPerson( name, age )),
        deletePersonHandler: ( personId ) => dispatch(actionCreators.deletePerson( personId ))
      }
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);