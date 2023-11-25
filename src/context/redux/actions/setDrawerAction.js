export const setRightDrawer = (boolean) => async (dispatch) => {
    await dispatch({ type: "RIGHT_DRAWER", payload: boolean })
}