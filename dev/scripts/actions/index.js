export const addItem = (text) => ({
    type : 'ADD_ITEM',
    text
})

export const toggleItem = (id) => {
    console.log(`toggleItem ${id}`);
    return { type : 'TOGGLE_ITEM',id }
}

export const setSinePartial = (id, value) => {
    return {type : "SET_SINE_PARTIALS", idx : id, value : parseFloat(value)}
}

export const setCosPartial = (id, value) => {
    return {type : "SET_COS_PARTIALS", idx : id, value : parseFloat(value)}
}