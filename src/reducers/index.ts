import { combineReducers } from 'redux';
import { Contact } from 'models';
import contactsReducer from 'reducers/contactsReducer';
import selectedContactReducer from 'reducers/selectedContactReducer';

export default combineReducers<State | any>({
    contacts: contactsReducer,
    selectedContact: selectedContactReducer
});

export interface State {
    contacts: Array<Contact>;
    selectedContact: Contact;
}