export default (state = [], action) => {
    switch (action.type) {
        case "FETCH_USER":
            return [...state, action.payload]; // Spread operator to create new array and add to it the payload
        default:
            return state;
    }
};