import React from 'react';
import { dialogAction } from '../../context/redux/actions/setDialogAction';
import { useDispatch, useSelector } from 'react-redux';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { Button, Grid, Dialog } from '@material-ui/core';
import useStyles from './styles';
import Slider from '../slider/Slider';

const DialogContainer = () => {
    const {
        buttons,
        rightButton,
        leftButton,
        image,
        imageWrapper,
        imagesWrapper,
        imagesWrapperBase,
    } = useStyles()

    const { boolean = false, index } = useSelector(state => state.dialog)
    const images = useSelector(state => state.homeDataImages)
    const dispatch = useDispatch()
    const [touch, setTouch] = React.useState({})
    const [currentPage, setCurrentPage] = React.useState(index ? index : 0);
    const [callNext, setCallNext] = React.useState(false)
    const [callPrev, setCallPrev] = React.useState(false)
    const everyImageWrapper = React.useRef(null)

    React.useEffect(() => {
        setCurrentPage(index + 1)
    }, [boolean])
    return (
        <Dialog fullScreen={true} aria-labelledby="responsive-dialog-title" onClose={() => dispatch(dialogAction(false, index))} open={boolean}>
            <Grid container style={{ position: "relative", height: '100%' }} >
                <Button onClick={() => setCallNext(!callNext)}
                    className={buttons + " " + rightButton}
                >
                    <KeyboardArrowRight />
                </Button>
                <div className={imagesWrapperBase} >

                    <Grid
                        className={imagesWrapper}
                        style={{ transform: `translateX(calc(100% * (0 - (${currentPage}))))` }}
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
                            slideNums={1}
                            everySlide={everyImageWrapper}
                        >
                            {images.map((step, ind) => ((
                                <div ref={everyImageWrapper} key={ind} className={imageWrapper} >
                                    <img className={image} src={images[ind].imgPath} alt="" />
                                </div>
                            )))}
                        </Slider>
                    </Grid>

                </div>
                <Button onClick={() => setCallPrev(!callPrev)} className={buttons + " " + leftButton} >
                    <KeyboardArrowLeft />
                </Button>
            </Grid>
        </Dialog>
    );
}
export default DialogContainer