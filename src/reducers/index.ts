import { combineReducers } from 'redux';
import contactsReducer from './contactsReducer';
import { Contact } from '../models';

export default combineReducers<State | any>({
    contacts: contactsReducer
});

export interface State {
    contacts: Array<Contact>;
}