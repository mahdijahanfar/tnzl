import React from 'react';
import useStyles from './styles';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import InstagramIcon from '@material-ui/icons/Instagram';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
const Footer = () => {
    const { pathname } = useLocation()

    const {
        root,
        wavedRoot,
        wave,
        tableIcons,
        symbolFooter,
        addressRowContainers,
        homeImage,
    } = useStyles()
    return (
        <footer >
            <Grid className={classNames(root, { [wavedRoot]: pathname === "/" })} container justifyContent={'space-around'} >
                <Grid container style={{ width: "unset" }} item >
                    <img className={classNames(symbolFooter, { [homeImage]: pathname === '/' })} src="./images/footersImage.PNG" alt="" />
                </Grid>
                <Grid container style={{ width: "unset" }} direction="column" justifyContent='center' item >
                    <Grid container className={addressRowContainers} alignItems='center' justifyContent='flex-end' wrap='nowrap'>
                        <Typography>quran@isca.ac.ir</Typography>
                        <MailIcon className={tableIcons} />
                    </Grid>
                    <Grid container className={addressRowContainers} alignItems='center' justifyContent='flex-end' wrap='nowrap'>
                        <Typography>quran@isca.ir</Typography>
                        <InstagramIcon className={tableIcons} />
                    </Grid>
                </Grid>
                <Grid item style={{ flexBasis: "100%", textAlign: "center" }} >
                    <Typography>کلیه حقوق این سایت محفوظ است</Typography>
                </Grid>
                {pathname === "/" && <div className={wave} />}
            </Grid>
        </footer>
    );
}

export default Footer;