import {
    gettingNewsDataFromApi,
    gettingImagesDataFromApi,
    gettingArticlesDataFromApi,
    gettingPoemsDataFromApi,
} from "../../../api/exampleDATAFromServer"

export const homeDataNews = () => async (dispatch) => {
    const news = gettingNewsDataFromApi()
    await dispatch({ type: "HOME_DATA_NEWS", payload: news })
}
export const homeDataImages = () => async (dispatch) => {
    const images = gettingImagesDataFromApi()
    await dispatch({ type: "HOME_DATA_IMAGES", payload: images })
}
export const homeDataArticles = () => async (dispatch) => {
    const articles = gettingArticlesDataFromApi()
    await dispatch({ type: "HOME_DATA_ARTICLES", payload: articles })
}
export const homeDataPoems = () => async (dispatch) => {
    const poems = gettingPoemsDataFromApi()
    await dispatch({ type: "HOME_DATA_POEMS", payload: poems })
}