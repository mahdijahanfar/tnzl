import React from 'react';
import useStyles from './styles';
import { FormControl, Grid, MenuItem } from '@material-ui/core';
import classNames from 'classnames';

import { TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setSecondSearchLayer } from '../../context/redux/actions/setSearchLayersAction';
import { useSelector } from 'react-redux';
const SetWhichBook = () => {
    const [onButtonsClick, setOnButtonsClick] = React.useState()

    const value = useSelector(state => state.secondSearchLayer)
    const dispatch = useDispatch()

    const {
        switchAbleButtons,
        switchedButtons,
        buttonsContainer,
    } = useStyles()

    return (
        <div className={buttonsContainer} >
            {[{ label: 'قرائت', indexName: "read" }, { label: 'تفسیر', indexName: "meaning" }, { label: 'ترجمه', indexName: "translate" }, { label: 'فضیلت', indexName: "betterancy" }, { label: 'متن', indexName: "text" }].map(({ label, indexName }, index) =>
                <Grid container key={index} onClick={() => setOnButtonsClick(index)} className={classNames(switchAbleButtons, {
                    [switchedButtons]: onButtonsClick === index
                    //  آنکلیکی که اینجا گذاشتم کافی نیست ,چون کاربر میتونه به جا اینکه کلیک کنه ,اینترو بزنه و اونوقت اگه اینطوری بشه مقدارش ست میشه تو استور و جاهای مختلف ولی رنگ دکمه ای که انتخاب شده نارنجی نمیشه  
                })} >
                    <FormControl variant="standard" style={{ width: "100%" }} sx={{ m: 1, minWidth: 100 }}>
                        <TextField
                            value={value[indexName] ? value[indexName] : label}
                            name={indexName}
                            onChange={({ target: { name, value } }) => dispatch(setSecondSearchLayer({ [name]: value }))}
                            select
                            label={null}
                        >
                            <MenuItem style={{ fontFamily: "unset" }} value={label}>
                                <em>{label}</em>
                            </MenuItem>
                            {["a1", "b2", "c3", "d4", "e5"].map((text, count) => <MenuItem key={count} style={{ fontFamily: "unset" }} value={text}>{text}</MenuItem>)}
                        </TextField>
                    </FormControl>
                </Grid>
            )}
        </div>
    );
}

export default SetWhichBook;