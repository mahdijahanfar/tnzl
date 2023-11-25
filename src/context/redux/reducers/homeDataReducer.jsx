export const homeDataNews = (state = null, action) => {
    switch (action.type) {
        case "HOME_DATA_NEWS":
            return action.payload

        default:
            return state
    }
}
export const homeDataImages = (state = null, action) => {
    switch (action.type) {
        case "HOME_DATA_IMAGES":
            return action.payload

        default:
            return state
    }
}
export const homeDataArticles = (state = null, action) => {
    switch (action.type) {
        case "HOME_DATA_ARTICLES":
            return action.payload

        default:
            return state
    }
}
export const homeDataPoems = (state = null, action) => {
    switch (action.type) {
        case "HOME_DATA_POEMS":
            return action.payload

        default:
            return state
    }
}

