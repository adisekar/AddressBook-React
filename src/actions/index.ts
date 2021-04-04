import client from "../apis/client";
import { FETCH_CONTACTS } from './types';

// export const fetchContacts = () => async (dispatch, getState) => {
//     // const response = await client.get("/?results=25");
//     // Dispatch is called, once response await finishes. Use dispatch instead of returning plain action object
//     dispatch({
//         type: "FETCH_CONTACTS",
//         payload: response.data.results
//     });      
// };

export const fetchContacts = () => {
    const response = client.get('/?results=25');
    return {
        type: FETCH_CONTACTS,
        payload: response
    };
};