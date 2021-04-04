import { FETCH_CONTACTS } from 'actions/types';
import { Action } from 'models'

export default (state = [], action: Action<string, any>) => {
    switch (action.type) {
        case FETCH_CONTACTS:
            return action.payload.data.results;
        default:
            return state;
    }
};