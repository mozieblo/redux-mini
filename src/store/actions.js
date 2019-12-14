export const ADD_PERSON = 'ADD_PERSON';
export const DELETE_PERSON = 'DELETE_PERSON';

export const addPerson = ( name, age ) => {
    return {
        type: ADD_PERSON,
        personData: {
            name,
            age
        }
    }
}

export const deletePerson = ( personId ) => {
    return {
        type: DELETE_PERSON,
        id: personId
    }
}