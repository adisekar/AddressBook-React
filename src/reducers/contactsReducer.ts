import { FETCH_CONTACTS } from '../actions/types';
import { Action, Contact } from '../models';

export default (state = [], action: Action<string, any>) => {
    switch (action.type) {
        case FETCH_CONTACTS:
            const contacts = action.payload.data.results;
            return [...state, ...contacts]; // Spread operator to create new array and add to it the payload
        default:
            return state;
    }
};