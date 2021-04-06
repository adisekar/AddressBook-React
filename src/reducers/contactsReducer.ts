import { FETCH_CONTACTS } from 'actions/types';
import { Action } from 'models'

export default (state = [], action: Action<string, any>) => {
    switch (action.type) {
        case FETCH_CONTACTS:
            let contacts = action.payload && action.payload.data && action.payload.data.results;
            if (contacts) {
                return contacts;
            } else {
                throw new Error('Fetch Failed');
            }
        default:
            return state;
    }
};