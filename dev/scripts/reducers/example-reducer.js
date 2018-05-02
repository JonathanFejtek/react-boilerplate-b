export const itemsReducer = (state = [{text : 'one', toggled : false}], action) => {
    switch (action.type){
        case 'ADD_ITEM' :
            return [...state, {text : action.text, toggled : false}]
        break;

        case 'TOGGLE_ITEM' :
            let newState = state.slice();
            newState[action.id].toggled = !newState[action.id].toggled;
            return newState;
        break;

        default :
            return state;
    }
}

export const toggledItemsReducer = (state = [], action) => {
    switch (action.type){
        case "TOGGLE_ITEM" :
            console.log("toggling item");
            return state;
        break;

        default :
            return state;
    }
}