
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
    sliderWrapper: {
        padding: "0 3rem"
    },
    scroller: {
        transition: 'transform 1s',
    },
    otherPoem: {
        // overflow: "hidden",
    },
    otherPoemWrapper: {
        [theme.breakpoints.up(500)]: {
            padding: "0 6rem",
        },
        position: "relative",
    },
    lastPoemWrapper: {
        padding: '1rem',
        overflow: "hidden",
        [theme.breakpoints.down(769)]: {
            flexDirection: "column",
        },
    },
    poemPadders: {
        // padding: '1rem',
        // minWidth: 'calc(20% - 2rem)',
        minWidth: '1px',
        // [theme.breakpoints.down(993)]: {
        //     minWidth: 'calc(25% - 2rem)',
        // },
        // [theme.breakpoints.down(769)]: {
        //     minWidth: 'calc(33.33% - 2rem)',
        // },
        // [theme.breakpoints.down(500)]: {
        //     minWidth: 'calc(50% - 2rem)',
        // },
    },
    poemLittleImages: {
        margin: 'auto',
        width: '90%',
        // width: '20rem',
        height: '15rem',
        objectFit: "cover",
    },
    poemImages: {
        width: '100%',
        maxHeight: "45rem",
        objectFit: "cover",
    },
    poemImagesWrapper: {
        flexBasis: "60%",
    },
    selectedPoemData: {
        color: theme.palette.primary.light,
        textAlign: 'justify',
    },
    selectedPoemDataWrapper: {
        paddingTop: "2rem",
        overflow: "hidden",
        position: "relative",
        [theme.breakpoints.up(769)]: {
            paddingRight: "2rem",
            flexBasis: '40%',
            "& p": {
                maxHeight: "45rem",
            },
        },
        "&::before": {
            content: "''",
            position: "absolute",
            width: "100%",
            bottom: 0,
            boxShadow: `0px 0px 60px 55px ${theme.palette.primary.main}`,
        },
    },
    poemTitles: {
        color: theme.palette.text.secondary,
        fontSize: "2rem",
        padding: '5rem 2rem 2rem',
    },
    buttons: {
        zIndex: 2,
        color: theme.palette.text.secondary,
        bottom: '50%',
        transform: 'translateY(50%)',
        position: "absolute",
        "& *": { fontSize: "7rem" },
    },
    rightButton: {
        right: 0,

    },
    leftButton: {
        left: 0,

    },
    cars: {
        background: "#5f9ea0",
        color: "#fff",
        fontSize: "36px",
        lineHeight: "100px",
        margin: "10px",
        padding: "2%",
        position: "relative",
        textAlign: "center",
    }
})
)


export default useStyles;