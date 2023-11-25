export const setFirstSearchLayer = (firstSearchLayerObject) => async (dispatch) => {
    await dispatch({ type: "FIRST_SEARCH_LAYER_OBJECT", payload: firstSearchLayerObject })
}

export const setSecondSearchLayer = (secondSearchLayerObject = { "text": "a1" }) => async (dispatch) => {
    await dispatch({ type: "SECOND_SEARCH_LAYER_OBJECT", payload: secondSearchLayerObject })
}