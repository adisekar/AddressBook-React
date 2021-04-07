import { combineReducers } from 'redux';
import { Contact } from 'models';
import contactsReducer from 'reducers/contactsReducer';
import selectedContactReducer from 'reducers/selectedContactReducer';
import paginationReducer from './paginationReducer';

export default combineReducers<State | any>({
    contacts: contactsReducer,
    selectedContact: selectedContactReducer,
    currentPageNumer: paginationReducer
});

export interface State {
    contacts: Array<Contact>;
    selectedContact: Contact;
    currentPageNumer: number;
}