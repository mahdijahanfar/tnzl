import React from 'react';
import useStyles from './styles';
import { Outlet } from 'react-router-dom';

import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';


const MainRoute = () => {
    const {
        homeContainer,
    } = useStyles()
    return (
        <>
            <Header />
            <div className={homeContainer}>
                <Outlet />
            </div>
            <Footer />
        </>


    );
}

export default MainRoute;