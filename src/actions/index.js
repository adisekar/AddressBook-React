import client from "../apis/client";

export const fetchContacts = () => async (dispatch, getState) => {
    const response = await client.get("/?results=25");

    // Dispatch is called, once response await finishes. Use dispatch instead of returning plain action object
    dispatch({
        type: "FETCH_CONTACTS",
        payload: response.data.results
    });
};