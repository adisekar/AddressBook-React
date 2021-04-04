import { combineReducers } from 'redux';
import contactsReducer from 'reducers/contactsReducer';
import { Contact } from 'models';

export default combineReducers<State | any>({
    contacts: contactsReducer
});

export interface State {
    contacts: Array<Contact>;
}