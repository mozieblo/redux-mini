import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PERSON:
            const newPerson = {
                id: Math.random(),
                name: action.personData.name,
                age: action.personData.age /*Math.floor( Math.random() * 40 )*/
            };
            return updateObject(state, {persons: state.persons.concat(newPerson)});
        case actionTypes.DELETE_PERSON:
            const updatedArray = state.persons.filter(person => person.id !== action.id);
            return updateObject(state, {persons: updatedArray});
        default:
            return state;
    }
};

export default reducer;