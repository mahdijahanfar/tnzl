// import {} from "../../../api/exampleDATAFromServer" //اینجا یه درخواست باید بدیم به سرور ولی هنوز تابعشو نساختم

export const setQuranData = () => async (dispatch, getState) => {
    const firstSearchLayer = getState().firstSearchLayer
    const secondSearchLayer = getState().secondSearchLayer

    await dispatch({ type: "QURAN", payload: label })
}//از این اکشن استفاده نکرده ام تا حالا ,چون شک داشتم لایه اول و دوم سرچو ,مستقیم ارسال کنم به سرور یا نه ,بیام و اینجا مشخص کنم چه صفحه ای از قرآن با چه ویژگیایی میخوام از سرور ,و از این جا این درخواستو بفرسم بهش ,برا همینم تا حالا نیمه کاره رهاش کرده ام