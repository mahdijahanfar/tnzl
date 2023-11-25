import * as React from 'react';
import Add from '@material-ui/icons/Add';
import { useSelector } from 'react-redux';
import { Button, Grid, Typography, useMediaQuery } from '@material-ui/core';
import useTheme from '@material-ui/styles/useTheme';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Slider from '../slider/Slider';



function Articles() {
    const theme = useTheme()
    const [slideNums, setSlideNums] = React.useState(4)
    const below769 = useMediaQuery(theme.breakpoints.down(769))
    const up769 = useMediaQuery(theme.breakpoints.between(769, 993))
    const up993 = useMediaQuery(theme.breakpoints.up(993))
    const handleCheckWindowWidth = () => {
        below769 && setSlideNums(2)
        up769 && setSlideNums(3)
        up993 && setSlideNums(4)
    }

    React.useEffect(() => {
        handleCheckWindowWidth()
    }
        , [
            useMediaQuery(theme.breakpoints.down(769)),
            useMediaQuery(theme.breakpoints.down(769)),
            useMediaQuery(theme.breakpoints.between(769, 993)),
            useMediaQuery(theme.breakpoints.up(993))
        ]
    )

    const articles = useSelector(state => state.homeDataArticles)
    const everyArticle = React.useRef(null)
    const [currentPage, setCurrentPage] = React.useState(0);
    const [callNext, setCallNext] = React.useState(false)
    const [callPrev, setCallPrev] = React.useState(false)
    const [touch, setTouch] = React.useState({})

    const {
        title,
        positiveIcon,
        header,
        headerLinkText,
        headerText,
        everyArticleClass,
        imageWrapper,
        articleContent,
        image,
        articlesContent,
        articleContentText,
        articleContentTitle,
        btnLink,
        btnLinkContainer,
        buttons,
        dotsContainer,
        dot,
        activedDot,
        rightButton,
        leftButton,
        articlesBlock,
        articlesWrapper,
        articlesScroller,
    } = useStyles()
    return (
        <>
            <Grid container alignItems='center' justifyContent='space-between' className={header} >
                <Typography className={headerText + " " + title} >مقالات</Typography>
                <Link to="/addAnArticle" >
                    <Button>
                        <Add className={headerText + " " + positiveIcon} />
                        <Typography component={"span"} className={headerText + " " + headerLinkText}>افزودن یک مقاله</Typography>
                    </Button>
                </Link>
            </Grid>
            <div className={articlesBlock} >
                <Grid container justifyContent='center' className={articlesWrapper} >
                    <div className={articlesScroller} >
                        <Grid
                            container
                            wrap='nowrap'
                            direction='row-reverse'
                            className={articlesContent}
                            style={{ transform: `translateX(calc(${100 / slideNums}% * (0 - (${currentPage}))))` }}
                            onDragStart={({ clientX }) => { setTouch({ clientX: clientX, eventType: "start" }) }}
                            onDragEnd={({ clientX }) => { setTouch({ clientX: clientX, eventType: "end" }) }}
                            onTouchStart={(e) => { setTouch({ clientX: e.touches[0].clientX, eventType: "start" }) }}
                            onTouchEnd={(e) => { setTouch({ clientX: e.changedTouches[0].clientX, eventType: "end" }) }}
                        >
                            <Slider
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                callNext={callNext}
                                callPrev={callPrev}
                                touch={touch}
                                contents={articles}
                                slideNums={slideNums}
                                everySlide={everyArticle}
                            >
                                {articles.map(({ imgPath, title, data }, index) =>
                                    <div ref={everyArticle} key={index} className={everyArticleClass} >
                                        <Link className={imageWrapper} to="/" >
                                            <img className={image} src={imgPath} alt="" />
                                        </Link>
                                        <div className={articleContent} >
                                            <Typography className={articleContentTitle} component={"h3"} >{title}</Typography>
                                            <article className={articleContentText} >{data}</article>
                                            <div className={btnLinkContainer}>
                                                <Link to="/" className={btnLink} >ادامه مطلب</Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Slider>
                        </Grid>
                    </div>
                    <Button
                        onClick={() => setCallNext(!callNext)}
                        className={buttons + " " + rightButton}
                    >
                        <KeyboardArrowRight />
                    </Button>
                    <Button onClick={() => setCallPrev(!callPrev)} className={buttons + " " + leftButton} >
                        <KeyboardArrowLeft />
                    </Button>
                </Grid>
                <Grid className={dotsContainer} direction='row-reverse' container justifyContent='center' alignItems='center'>
                    {articles.map((singleArticle, index) => (index <= articles.length - slideNums &&
                        <div key={index} onClick={() => setCurrentPage(index)} className={classNames(dot,
                            { [activedDot]: Math.abs(currentPage) % articles.length === index }
                        )} />
                    ))}
                </Grid>
            </div>
        </>
    );
}

export default Articles;

