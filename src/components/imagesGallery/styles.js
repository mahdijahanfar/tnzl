import { makeStyles } from '@material-ui/styles'
import { alpha } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    title: {
        color: theme.palette.text.secondary,
        fontSize: "2rem !important ",
        padding: '5rem 2rem 2rem',
    },
    container: {
        backgroundColor: theme.palette.secondary.main,
    },
    imagesWrapper: {
        transition: 'transform 1s',

    },
    imageWrapper: {
        minWidth: 'calc(33.33% - 1rem)',
        minHeight: '5rem',
        padding: '0.5rem',
        maxHeight: "25rem",
    },
    image: {
        "&:hover": {
            cursor: "zoom-in",
        },
        objectFit: 'cover',
        height: '100%',
        width: '100%',
    },
    imagesContainer: {
        paddingTop: '2rem',
        position: "relative",
    },
    buttons: {
        zIndex: 2,
        height: "100%",
        position: 'absolute',
        backgroundColor: alpha(theme.palette.secondary.main, 0.8),
        color: theme.palette.text.secondary,
        bottom: 0,
        "& *": {
            fontSize: "7rem",
        },
        [theme.breakpoints.down(500)]: {
            "& *": {
                fontSize: "5rem",
            },
            height: "unset",
            bottom: "50%",
            transform: "translateY(66%)",
            width: '7rem',
            minWidth: 'unset',
        },
    },
    rightButton: {
        right: 0,

    },
    leftButton: {
        left: 0,

    },
    dot: {
        margin: '0 0.4rem',
        padding: '0.8rem',
        borderRadius: '50%',
        backgroundColor: theme.palette.primary.light,
        cursor: "pointer",
    },
    activedDot: {
        backgroundColor: theme.palette.text.secondary
    },
    dotsContainer: {
        padding: '2.5rem',
    },
    imagesWrapperBase: {
        overflow: 'hidden',
    },
})
)

export default useStyles;