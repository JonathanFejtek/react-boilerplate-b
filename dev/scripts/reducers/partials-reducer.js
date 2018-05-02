import {store} from '../app';

let initialState = {
    partialData : {
        sinePartials : new Array(32).fill(0),
        cosPartials : new Array(32).fill(0),
        linkPartials : false,
    },
    presetData : {
        currentPreset : null,
        presets : {},
    }
}


export const dataReducer = (state = initialState, action) => {
    console.log(state);
    switch(action.type){
        default :
            return {
                partialData : partialsReducer(state.partialData,action),
                presetData : presetsReducer(state.presetData,action)
            };
    }
}

export const partialsReducer = (state, action) => {
    let newState = Object.assign({}, state);
    newState.cosPartials = newState.cosPartials.slice();
    newState.sinePartials = newState.sinePartials.slice();

    switch(action.type){
        case "SET_SINE_PARTIALS" :
            if(state.linkPartials){
                newState.cosPartials[action.idx] = action.value;
            }
            newState.sinePartials[action.idx] = action.value
            return newState;         
        break;

        case "SET_COS_PARTIALS":       
            
            if(state.linkPartials){
                newState.sinePartials[action.idx] = action.value;
            }
            newState.cosPartials[action.idx] = action.value
            return newState;
        break;

        case "LINK_PARTIALS":
            return Object.assign({}, state, {linkPartials : action.value})
        break;

        default :
            return state;
    }
}

const presetsReducer = (state, action) => {
    switch(action.type){
        case "UPDATE_CURRENT_PRESET_PARTIALS" :
            if(currentPreset !== null){
                return Object.assign({}, state, )
            }
        break;

        case "ADD_PRESET" :

        break;

        case "REMOVE_PRESET" : 

        break;

        default :
            return state;
    }

}
