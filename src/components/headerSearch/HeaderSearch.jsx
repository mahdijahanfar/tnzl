import { Button, ButtonBase, Grid, TextField } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import Autocomplete from '@mui/material/Autocomplete';
import classNames from 'classnames';
import React from 'react';
import useStyles from './styles';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setFirstSearchLayer } from '../../context/redux/actions/setSearchLayersAction';
import { gettingSoorehListDataFromApi } from '../../api/exampleDATAFromServer';
const HeaderSearch = () => {
    // این کامپوننت باگ داره 
    // توی لیستی که زیر سرچ باکس باز میشه , یکی دو تا آیتم آخرو گاهی نشون نمیده
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const firstSearchLayer = useSelector(state => state.firstSearchLayer)
    const storeKey = Object.keys(firstSearchLayer)[0]
    const storeValue = Object.values(firstSearchLayer)[0]
    // این خط بالا بعدا مورد نیاز میشه
    const { pathname } = useLocation()
    const rangeNum = (prefix, end, start = 1) => {
        const nums = []
        for (let id = start; id <= end; id++) {
            nums.push({ name: (prefix + id.toString()), id })
        }
        return nums
    }//این تابع یه آرایه میسازه برای لیست بازشوی مثلا انتخاب صفحات یا انتخاب جزء ها
    const [searchKey, setSearchKey] = React.useState("page")
    const [searchValue, setSearchValue] = React.useState("1")
    const [warningText, setWarningText] = React.useState()
    React.useEffect(() => {
        if (storeKey !== undefined && storeKey !== null && pathname === "/booksWorkshop" && searchKey) {
            inputBaseRef.current.click()
        }
    }, [searchKey])
    React.useEffect(() => {
        if (storeKey !== undefined && storeKey !== null) {
            setSearchKey(storeKey)
        }
    }, [firstSearchLayer])
    React.useEffect(() => {
        inputBaseRef.current.querySelector("input.MuiInputBase-input").value = ""
    }, [pathname])
    const handleSetSearchData = () => {
        if (searchValue && inputBaseRef.current.querySelector("input.MuiInputBase-input").value) {
            dispatch(setFirstSearchLayer({ [searchKey]: searchValue }))
        } else {
            setWarningText("لطفا از گزینه های مجاز انتخاب کنید")
            setTimeout(() => {
                setWarningText(null)
            }, 2000);
        }
    }
    const inputBaseRef = React.useRef(null)
    const onButtonsClick = (key) => {
        setSearchValue()
        setSearchKey(key)
        inputBaseRef.current.click();//کاربر ،به طور خودکار ،میره سراغ نوشتن تو باکس سرچ
    }
    const writingOnSearchBox = (value) => {
        // validate...
        console.log(value);
        setSearchValue(value);
    }
    const {
        searchField,
        inputBaseHeader,
        headerSearchSection,
        searchIconHeader,
        switchAbleButtons,
        switchedButtons,
        buttonsContainer,
        padderDiv,
        inputs,
    } = useStyles()
    return (
        <Grid onClick={() => pathname !== "/booksWorkshop" && navigate("/booksWorkshop")} item container className={headerSearchSection} >
            <div className={buttonsContainer}>
                {[{ label: 'صفحه', mainName: "page" }, { label: 'آیه', mainName: "aye" }, { label: 'حزب', mainName: "faction" }, { label: 'سوره', mainName: "sooreh" }, { label: 'جزء', mainName: "portion" }].map(({ label, mainName }, index) =>
                    <Grid key={index} item className={padderDiv} >
                        <div onClick={() => onButtonsClick(mainName)} className={classNames(switchAbleButtons, {
                            [switchedButtons]: searchKey === mainName
                        })} >
                            {label}
                        </div>
                    </Grid>
                )}
            </div>
            <div className={searchField} >
                {/* 
                    من یه توضیح بدم از کدای پایین:
                    با توجه به "سرچ کی" پنج تا اینپوت ممکنه کاربر بخواد انتخاب کنه, برا همین من پنج تا "اوتوکامپلت" گذاشتم. ولی خب شایدم میشد پنج تا "تکس فیلد" بذاریم تو یدونه "اوتوکمپلت" و همچنین نکته دوم اینکه 
                    (چون بجا اینکه به من "ال آی" برگردونه ,"اینپوت" میده) این آنچینج هایی که گذاشتم و بعدش کامنتشون کردم مال این بوده که یه اشکال داشتن ,اونم اینکه کاربر یا میتونه کلیک کنه روی لیست باز شده ,یا دکمه اینترو از کلیدای کیبورد بزنه, اگه حالت اول اتفاق بیفته ,هیچ مشکلی نیست(چون به من یه تگ "لیست آیتم" یا همون "ال آی" برمیگردونه که من از روی یه اتریبیوت خاصش میتونم ایندکسشو در بیارم ,تا بفهمم چندمین ردیف انتخاب شده) ,ولی اگه حالت دوم اتفاق بیفته نات ا نامبر برمیگردونه
                    راه حلشم به نظرم اینه که توی آبجکتای آرایه ای که بهش میدیم ,یه آی دی اضافه کنیم و با انتخاب شدن چیزی که کاربر میخواد آی دی شو بفرسیم به استور ریداکس
                */}
                {
                    searchKey === "sooreh" &&
                    <Autocomplete
                        ref={inputBaseRef}
                        disablePortal
                        options={gettingSoorehListDataFromApi()}
                        // onChange={({ target }) => { console.log(target); writingOnSearchBox(parseInt(target.getAttribute("data-option-index")) + 1) }}
                        renderOption={(props, { soorehName, id }) => <li {...props} key={id + 1} >{(id + 1) + "-" + soorehName}</li>}
                        sx={{ width: `100%` }}
                        renderInput={(params) => <TextField className={inputs} placeholder={"فهرست سوره ها"} {...params} />}
                    />
                }
                {
                    searchKey === "page" &&
                    <Autocomplete
                        ref={inputBaseRef}
                        disablePortal
                        options={rangeNum("صفحه ", 605).map(({ name }, id) => name)}
                        // onChange={({ target }) => { console.log(target); writingOnSearchBox(parseInt(target.getAttribute("data-option-index")) + 1) }}
                        renderOption={(props, { id, name }) => <li {...props} key={id + 1} >{name}</li>}
                        sx={{ width: `100%` }}
                        renderInput={(params) => <TextField {...params} className={inputs} placeholder={"فهرست صفحه ها (از 1 تا 605)"} />}
                    />
                }
                {
                    searchKey === "aye" &&
                    <Autocomplete
                        ref={inputBaseRef}
                        disablePortal
                        options={gettingSoorehListDataFromApi().map(({ soorehName, id }) => ({ soorehName, id }))}
                        // onChange={({ target }) => { console.log(target); writingOnSearchBox(parseInt(target.getAttribute("data-option-index")) + 1) }}
                        renderOption={(props, { soorehName, id }) => { console.log(soorehName, id, props); return (<li {...props} key={id + 1} >{soorehName}</li>) }}
                        sx={{ width: `100%` }}
                        renderInput={(params) => <TextField {...params} className={inputs} placeholder={"فهرست آیه ها"} />}
                    />
                }
                {
                    searchKey === "faction" &&
                    <Autocomplete
                        ref={inputBaseRef}
                        disablePortal
                        options={gettingSoorehListDataFromApi().map(({ soorehName, id }) => ({ soorehName, id }))}
                        // onChange={({ target }) => { console.log(target); writingOnSearchBox(parseInt(target.getAttribute("data-option-index")) + 1) }}
                        renderOption={(props, { soorehName, id }) => <li {...props} key={id + 1} >{(id + 1) + "-" + soorehName}</li>}
                        sx={{ width: `100%` }}
                        renderInput={(params) => <TextField {...params} className={inputs} placeholder={"فهرست حزب ها"} />}
                    />
                }
                {
                    searchKey === "portion" &&
                    <Autocomplete
                        ref={inputBaseRef}
                        disablePortal
                        options={rangeNum("سوره ", 30).map(({ name }, id) => name)}
                        // onChange={({ target }) => { console.log(target); writingOnSearchBox(parseInt(target.getAttribute("data-option-index")) + 1) }}
                        renderOption={(props, { id, name }) => <li {...props} key={id + 1} >{name}</li>}
                        sx={{ width: `100%` }}
                        renderInput={(params) => <TextField {...params} className={inputs} placeholder={"فهرست جزء ها (از 1 تا 30)"} />}
                    />
                }
                <ButtonBase onClick={() => handleSetSearchData()} >
                    <Search className={searchIconHeader} />
                </ButtonBase>
            </div>
            {warningText && <p style={{ color: "#ff0000" }} >{warningText}</p>}
        </Grid>
    );
}

export default HeaderSearch;