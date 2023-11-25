import { gettingSoorehListDataFromApi } from "../../../api/exampleDATAFromServer"

export const soorehListData = () => async (dispatch, getState) => {
    const soorehListData = getState().soorehListData.length !== 0 ? getState().soorehListData : gettingSoorehListDataFromApi()
    await dispatch({ type: "SOOREH_LIST_DATA", payload: soorehListData })
}