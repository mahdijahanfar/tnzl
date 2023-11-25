export const dialogAction = (boolean, index) => async (dispatch) => {
    await dispatch({ type: "DIALOG", payload: { boolean, index } })
}