export const soorehListData = (state = [], action) => {
    switch (action.type) {
        case "SOOREH_LIST_DATA": return action.payload
        default: return state
    }
}