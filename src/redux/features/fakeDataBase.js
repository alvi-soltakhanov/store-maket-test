const initialState = {
    cards: [],
    materials: [],
    cart: [],
}

export const fakeDataBase = (state = initialState, action) => {
    switch (action.type) {

    case "getData-filter-fulfilled":
        return {
            ...state,
           cards: action.payload
        };

    case "getAlldata-fulfilled":
        return {
            ...state,
            cards: action.payload
        };
    
    default: 
        return state;
    }   
}