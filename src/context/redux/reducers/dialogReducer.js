export const dialog = (state = false, action) => {
    switch (action.type) {
        case 'DIALOG': return action.payload
        default: return state
    }
}