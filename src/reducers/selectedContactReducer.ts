import { SELECT_CONTACT } from 'actions/types';
import { Action } from 'models'

export default (state = {}, action: Action<string, any>) => {
    switch (action.type) {
        case SELECT_CONTACT:
            return action.payload;
        default:
            return state;
    }
};