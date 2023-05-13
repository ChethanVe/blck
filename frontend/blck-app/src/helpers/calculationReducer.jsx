export const INITIAL_STATE ={
    price:'',
    additionalKms:'',
    additionalHrs:'',
    data:'',
    time:'',
    totalPrice:'',
};

export const priceCalculation = (state, action) => {
    switch (action.type) {
        case "CHANGE_INPUT":
            return {
                ...state,
                [action.payload.name]:action.payload.value
            };
            break;
    
        default:
            return state;
            break;
    }
};