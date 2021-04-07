import { SET_PAGINATION_VALUE } from 'actions/types';
import { Action } from 'models'

export default (state = 1, action: Action<string, any>) => {
    switch (action.type) {
        case SET_PAGINATION_VALUE:
            return action.payload;
        default:
            return state;
    }
};