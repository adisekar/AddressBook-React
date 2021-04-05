import selectedContactReducer from 'reducers/selectedContactReducer';
import { SELECT_CONTACT } from 'actions/types';

it('handles actions of type SELECT_CONTACT', () => {
    const payload = {
        "gender": "female",
        "name": {
            "title": "Miss",
            "first": "Jane",
            "last": "Smith"
        }
    };

    const action = {
        type: SELECT_CONTACT,
        payload: payload
    };

    const newState = selectedContactReducer({}, action);
    expect(newState).toEqual(payload);
});

it('handles actions with unknown type', () => {
    const newState = selectedContactReducer({}, { type: 'JJDJD' });
    expect(newState).toEqual({});
});