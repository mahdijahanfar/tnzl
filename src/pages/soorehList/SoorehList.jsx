import React from 'react';
import useStyles from './styles';
import { Grid, Typography, useMediaQuery } from '@material-ui/core';
import useTheme from '@material-ui/styles/useTheme';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { setFirstSearchLayer } from '../../context/redux/actions/setSearchLayersAction';
import { useSelector, useDispatch } from 'react-redux';
import { soorehListData as getData } from "../../context/redux/actions/soorehListDataAction"
import { Helmet } from 'react-helmet';
const SoorehList = () => {
    React.useEffect(() => dispatch(getData()), [])
    const soorehListData = useSelector(state => state.soorehListData)
    const dispatch = useDispatch()
    const dataCutter = (whichHalf = 1) => whichHalf === 2 ? soorehListData.slice(57) : soorehListData.slice(0, 57)
    {/* برا اینکه از 1200 به بالا اطلاعات,دو تیکه ای بشه و بیاد کنار هم از این تابع بالا استفاده کردم */ }
    const theme = useTheme()
    const isWindowMiner1200 = useMediaQuery(theme.breakpoints.down(1200))
    const navigate = useNavigate()
    const {
        root,
        headerList,
        yellowText,
        greenText,
        brownText,
        column,
        rowedData,
        hasAfter,
        hasBefore,
        // این دوتا کلاس بالا را میخواستم خودم بعدا حظفش کنم ولی چون شک داشتم روی اینکه وقتی هاور میشه ردیفای جدول چه اتفاقی بیفته ,فعلا نگهش داشتم
    } = useStyles()

    const handleSearchSooreh = (id) => {
        dispatch(setFirstSearchLayer({ "sooreh": id }))
        navigate("/booksWorkshop")
    }
    return (
        <Grid className={root} container justifyContent={"center"} >
            <Helmet>
                <title>
                    تنزیل | لیست سوره ها
                </title>
            </Helmet>
            <Grid item className={column} >
                <Grid container item wrap={'nowrap'} justifyContent={"space-between"} className={headerList} >
                    <Typography className={yellowText} >ردیف</Typography>
                    <Typography className={greenText} >نام سوره</Typography>
                    <Typography className={brownText} >تعداد آیه</Typography>
                </Grid>
                {dataCutter().map(({ soorehName, ayeNumber }, index) =>
                    <Grid onClick={() => handleSearchSooreh(index + 1)} key={index} container item wrap={'nowrap'} justifyContent={"space-between"} className={classNames(rowedData, { [hasAfter]: index % 2 === 0, [hasBefore]: index % 2 !== 0 })} >
                        <Typography className={yellowText} >{index + 1}</Typography>
                        <Typography className={greenText} >{soorehName}</Typography>
                        <Typography className={brownText} >{ayeNumber}</Typography>
                    </Grid>
                )}
            </Grid>
            <Grid item className={column} >
                {
                    !isWindowMiner1200 &&
                    <Grid container item wrap={'nowrap'} justifyContent={"space-between"} className={headerList} >
                        <Typography className={yellowText} >ردیف</Typography>
                        <Typography className={greenText} >نام سوره</Typography>
                        <Typography className={brownText} >تعداد آیه</Typography>
                    </Grid>
                }
                {dataCutter(2).map(({ soorehName, ayeNumber }, index) =>
                    <Grid onClick={() => handleSearchSooreh(index + 1 + 57)} container key={index} item wrap={'nowrap'} justifyContent={"space-between"} className={classNames(rowedData, { [hasAfter]: index % 2 !== 0, [hasBefore]: index % 2 === 0 })} >
                        <Typography className={yellowText} >{index + (57) + 1}</Typography>
                        <Typography className={greenText} >{soorehName}</Typography>
                        <Typography className={brownText} >{ayeNumber}</Typography>
                    </Grid>
                )}
            </Grid>
        </Grid>
    );
}

export default SoorehList;