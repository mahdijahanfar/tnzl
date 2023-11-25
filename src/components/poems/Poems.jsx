import React from "react";



import useStyles from './styles';
import useTheme from '@material-ui/styles/useTheme';
import { Button, Grid, Typography, useMediaQuery } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import Slider from "./../slider/Slider"
import Slider from "react-slick"
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';


const Poems = () => {
    const theme = useTheme()
    const [slideNums, setSlideNums] = React.useState(5)
    const below500 = useMediaQuery(theme.breakpoints.down(500))
    const below769 = useMediaQuery(theme.breakpoints.between(500, 769))
    const below993 = useMediaQuery(theme.breakpoints.between(769, 993))
    const up993 = useMediaQuery(theme.breakpoints.up(993))
    const handleCheckWindowWidth = () => {
        below500 && setSlideNums(2)
        below769 && setSlideNums(3)
        below993 && setSlideNums(4)
        up993 && setSlideNums(5)
    }
    React.useEffect(() => {
        handleCheckWindowWidth()
    }, [useMediaQuery(theme.breakpoints.down(500)), useMediaQuery(theme.breakpoints.between(500, 769)), useMediaQuery(theme.breakpoints.between(769, 993)), useMediaQuery(theme.breakpoints.up(993))])
    const poems = useSelector((state) => state.homeDataPoems)
    const { imageSrc, title, data, id, history } = poems[poems.length - 1]
    const everyPoemPadder = React.useRef(null)
    const [currentPage, setCurrentPage] = React.useState(0);
    const [callNext, setCallNext] = React.useState(false)
    const [callPrev, setCallPrev] = React.useState(false)
    const [touch, setTouch] = React.useState({})
    const {
        sliderWrapper,
        scroller,
        lastPoemWrapper,
        poemImages,
        selectedPoemData,
        poemTitles,
        otherPoem,
        otherPoemWrapper,
        poemPadders,
        poemLittleImages,
        buttons,
        rightButton,
        leftButton,
        poemImagesWrapper,
        selectedPoemDataWrapper,
    } = useStyles()


    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }


    return (
        <div>
            <Typography className={poemTitles} >داستان ها و اشعار</Typography>
            <Link state={{ imageSrc, title, data, history, helmet: "داستان یا شعر" }} to={`/lastData/${id}`} >
                <Grid container justifyContent="space-between" className={lastPoemWrapper} wrap={"nowrap"} >
                    <div className={poemImagesWrapper} >
                        <img
                            className={poemImages}
                            src={imageSrc}
                            alt="قرآن کتبی"
                        />
                    </div>
                    <div className={selectedPoemDataWrapper} >
                        <Typography className={selectedPoemData} >
                            {data}
                        </Typography>
                    </div>
                </Grid>
            </Link>
            <div onDragStart={(e) => { }} className={sliderWrapper} >
                <Slider
                    {...settings}
                >
                    {poems.map(({ imageSrc, id, title, data }, index) => index !== poems.length - 1 && (
                        // <div>

                        <Link key={index} state={{ imageSrc, title, data, history, helmet: "داستان یا شعر" }} ref={everyPoemPadder} to={`/lastData/${id}`}
                            className={poemPadders}
                        >
                            <img className={poemLittleImages} src={imageSrc} alt="قرآن کتبی" />
                        </Link>
                        // </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
export default Poems