export const ADD_PERSON = 'ADD_PERSON';
export const DELETE_PERSON = 'DELETE_PERSON';

export const saveAddPerson = ( name, age ) => {
    return {
        type: ADD_PERSON,
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
        type: DELETE_PERSON,
        id: personId
    }
}