export const drawer = (state = false, action) => {
    switch (action.type) {
        case 'RIGHT_DRAWER': return action.payload
        default: return state
    }
}