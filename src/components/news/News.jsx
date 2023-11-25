import React from "react";



import useStyles from './styles';
import { Grid, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const News = () => {
    const news = useSelector((state) => state.homeDataNews)
    const { imageSrc, data, id, title, history } = news[news.length - 1]



    const {
        newsContainer,
        selectedNews,
        lastNewsWrapper,
        newsImages,
        selectedNewsData,
        newsTitles,
        mainImageWrapper,
        otherNews,
        btnLinkWrapper,
        btnLink,
        newsPadders,
        newsDataBlock,
        newsDateBlock,
        newsImagesWrappers,
        newsDataText,
        newsLastImage,
        newsDataTitle,
    } = useStyles()



    return (
        <div className={newsContainer}>
            <Link state={{ imageSrc, title, data, history }} to={`/lastData/${id}`} className={selectedNews}>
                <Typography className={newsTitles} >اخبار و اطلاعیه</Typography>
                <div className={lastNewsWrapper}>
                    <Grid container className={mainImageWrapper} wrap={"nowrap"} >
                        <img
                            className={newsLastImage}
                            src={imageSrc}
                            alt="قرآن کتبی"
                        />
                    </Grid>
                    <div >
                        <Typography className={selectedNewsData} >
                            {data}
                        </Typography>
                    </div>
                </div>
            </Link>
            <div className={otherNews} >
                <Typography className={newsTitles} >اخبار اخیر</Typography>
                <div>
                    {news.map(({ imageSrc, title, history, id, time, data }, index) => index !== news.length - 1 && (
                        <Link key={index} state={{ imageSrc, title, data, history, helmet: "اخبار" }} to={`/lastData/${id}`} className={newsPadders} >
                            <Grid container className={newsImagesWrappers} wrap={"nowrap"} >
                                <img className={newsImages} src={imageSrc} alt="قرآن کتبی" />
                            </Grid>
                            <div className={newsDataBlock} >
                                <Grid className={newsDateBlock} container justifyContent="space-between" >
                                    <Typography>{history}</Typography>
                                    <Typography>{time}</Typography>
                                </Grid>
                                <Typography className={newsDataText} >{data}</Typography>
                                <Typography className={newsDataTitle}>{title}</Typography>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className={btnLinkWrapper} >
                    <a className={btnLink} href="" >
                        خبر های بیشتر
                    </a>
                </div>
            </div>
        </div>
    );
}
export default News