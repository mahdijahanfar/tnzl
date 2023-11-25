import * as React from 'react';
import Typography from '@mui/material/Typography';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Grid } from '@material-ui/core';
import useStyles from './styles';
import classNames from 'classnames';
import { dialogAction } from '../../context/redux/actions/setDialogAction';
import DialogContainer from './../dialog/Dialog';
import Slider from './../slider/Slider';

function ImagesGallery() {
    console.log("images");
    const {
        imageWrapper,
        imagesWrapper,
        image,
        imagesContainer,
        buttons,
        rightButton,
        leftButton,
        title,
        dot,
        activedDot,
        dotsContainer,
        imagesWrapperBase,
        container,
    } = useStyles()
    const dispatch = useDispatch()
    const [touch, setTouch] = React.useState({})
    const [currentPage, setCurrentPage] = React.useState(0);
    const [callNext, setCallNext] = React.useState(false)
    const [callPrev, setCallPrev] = React.useState(false)
    const images = useSelector(state => state.homeDataImages)
    const everyImageWrapper = React.useRef(null)
    return (
        <>
            <Typography className={title} >گالری تصاویر</Typography>
            <div className={container} >
                <div className={imagesContainer} >
                    <Button
                        onClick={() => setCallNext(!callNext)}
                        className={buttons + " " + rightButton}
                    >
                        <KeyboardArrowRight />
                    </Button>
                    <div className={imagesWrapperBase} >
                        <Grid className={imagesWrapper}
                            style={{ transform: `translateX(calc(33.33% * (0 - (${currentPage}))))` }}
                            container
                            direction='row-reverse'
                            wrap='nowrap'
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
                                contents={images}
                                slideNums={3}
                                everySlide={everyImageWrapper}
                            >
                                {images.map((step, index) => ((
                                    <div ref={everyImageWrapper} key={index} className={imageWrapper}>
                                        <img onClick={() => dispatch(dialogAction(true, index))} className={image} src={step.imgPath} alt={step.label} />
                                    </div>
                                )))}
                            </Slider>
                        </Grid>
                    </div>
                    <Button onClick={() => setCallPrev(!callPrev)} className={buttons + " " + leftButton} >
                        <KeyboardArrowLeft />
                    </Button>
                </div>
                <Grid className={dotsContainer} direction='row-reverse' container justifyContent='center' alignItems='center'>
                    {images.map((image, index) => (index <= images.length - 3 &&
                        <div key={index} onClick={() => setCurrentPage(index)} className={classNames(dot,
                            { [activedDot]: (currentPage) === index }
                        )} />
                    ))}
                </Grid>
            </div>
            <DialogContainer />
        </>
    );
}
export default ImagesGallery;