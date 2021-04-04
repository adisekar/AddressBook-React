import client from "apis/client";
import { FETCH_CONTACTS, SELECT_CONTACT } from 'actions/types';
import { Contact } from "models";

// export const fetchContacts = () => async (dispatch, getState) => {
//     // const response = await client.get("/?results=25");
//     // Dispatch is called, once response await finishes. Use dispatch instead of returning plain action object
//     dispatch({
//         type: "FETCH_CONTACTS",
//         payload: response.data.results
//     });      
// };

export const fetchContacts = (page = 1) => {
    const queryString = `/?page=${page}&results=10`;
    const response = client.get(queryString);
    return {
        type: FETCH_CONTACTS,
        payload: response
    };
};

export const selectContact = (contact: Contact) => {
    return {
        type: SELECT_CONTACT,
        payload: contact
    };
};