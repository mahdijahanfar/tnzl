import { makeStyles } from '@material-ui/styles'
const useStyles = makeStyles((theme) => ({
    image: {
        width: "100%",
        maxHeight: "100vh",
        minHeight: "100%",
        objectFit: "contain",
    },
    buttons: {
        zIndex: 2,
        color: theme.palette.text.secondary,
        position: 'absolute',
        bottom: 0,
        height: "100%",
        "& *": { fontSize: "7rem" },
    },
    rightButton: {
        right: 0,
    },
    leftButton: {
        left: 0,
    },
    imageWrapper: {
        padding: '0 7rem',
        minWidth: 'calc(100% - 14rem)',
    },
    imagesWrapper: {
        transition: 'transform 1s',
        height: '100%',
    },
    imagesWrapperBase: {
        height: '100%',
        overflow: 'hidden',
    },
})
)
export default useStyles;