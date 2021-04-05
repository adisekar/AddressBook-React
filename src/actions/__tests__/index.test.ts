import { fetchContacts, selectContact } from 'actions';
import { FETCH_CONTACTS, SELECT_CONTACT } from 'actions/types';
import data from 'mock/data';

describe('fetchContacts', () => {
    it('has the correct type', () => {
        const action = fetchContacts();
        expect(action.type).toEqual(FETCH_CONTACTS);
    });
});

describe('selectContact', () => {
    const payload = data.results[0];
    it('has the correct type', () => {
        const action = selectContact(payload);
        expect(action.type).toEqual(SELECT_CONTACT);
    });

    it('has the correct payload', () => {
        const action = selectContact(payload);
        expect(action.payload.name.first).toEqual('Louane');
        expect(action.payload.email).toEqual('louane.vidal@example.com');
    });
});
