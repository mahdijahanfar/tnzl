import { Grid, Typography } from '@material-ui/core';
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import useStyles from './styles';
import { Helmet } from 'react-helmet';

const LastData = () => {
    const { state: { imageSrc, title, data, history, helmet } } = useLocation()

    const {
        titleClass,
        text,
        image,
        root,
    } = useStyles()

    return (
        <div className={root} >
            <Helmet>
                <title>
                    {`تنزیل | آخرین ${helmet}`}
                </title>
            </Helmet>
            <Grid container justifyContent='space-between' >
                <Typography className={titleClass} >موضوع:{title}</Typography>
                <Typography className={titleClass} >تاریخ:{history}</Typography>
            </Grid>
            <img className={image} src={imageSrc} alt="" />
            <Typography className={text} >{data}</Typography>
        </div>
    );
}
export default LastData