import React from 'react';
import useStyles from './styles';
import SideBar from './../drawer/SideBar';
import { useDispatch } from 'react-redux';
import { setRightDrawer } from './../../context/redux/actions/setDrawerAction';

const TanzilMenuIcon = () => {
    const dispatch = useDispatch()
    const {
        menuLines,
        halfMenuLines,
        halfMenuLinesTop,
        halfMenuLinesBottom,
        menuIcon,
        compeleteMenuLinesMiddle,
    } = useStyles()
    return (
        <>
            <div onClick={() => dispatch(setRightDrawer(true))} className={menuIcon}>
                <div className={menuLines + " " + halfMenuLines + " " + halfMenuLinesTop}></div>
                <div className={menuLines + " " + compeleteMenuLinesMiddle}></div>
                <div className={menuLines + " " + halfMenuLines + " " + halfMenuLinesBottom}></div>
            </div>
            <SideBar />
        </>

    );
}

export default TanzilMenuIcon;