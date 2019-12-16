import * as actionTypes from '../actions/actionTypes';

export const saveAddPerson = ( name, age ) => {
    return {
        type: actionTypes.ADD_PERSON,
        personData: {
            name,
            age
        }
    }
}

export const addPerson = ( name, age ) => {
    return dispatch => {
        setTimeout( () => {
            dispatch(saveAddPerson( name, age ))
        }, 2000)
    }
}

export const deletePerson = ( personId ) => {
    return {
        type: actionTypes.DELETE_PERSON,
        id: personId
    }
}