export const firstSearchLayer = (
    state = { "page": 1 }
    , action) => {
    switch (action.type) {
        case "FIRST_SEARCH_LAYER_OBJECT":
            return action.payload

        default:
            return state
    }
}
export const secondSearchLayer = (state = {}, action) => {
    switch (action.type) {
        case "SECOND_SEARCH_LAYER_OBJECT":
            return action.payload

        default:
            return state
    }
}