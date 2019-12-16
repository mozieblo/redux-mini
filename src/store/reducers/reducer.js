import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    persons: []
}

const addPerson = ( state, action ) => {
    const newPerson = {
        id: Math.random(),
        name: action.personData.name,
        age: action.personData.age /*Math.floor( Math.random() * 40 )*/
    };
    return updateObject(state, {persons: state.persons.concat(newPerson)});
}

const deletePerson = ( state, action ) => {
    const updatedArray = state.persons.filter(person => person.id !== action.id);
    return updateObject(state, {persons: updatedArray});
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PERSON:
            return addPerson(state, action);
        case actionTypes.DELETE_PERSON:
            return deletePerson(state, action);
        default:
            return state;
    }
};

export default reducer;