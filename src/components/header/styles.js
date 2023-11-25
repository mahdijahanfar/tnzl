import { makeStyles } from '@material-ui/styles'

const upAndDownPaddingSeparated = 7

const useStyles = makeStyles(theme => ({
    greenSection: {
        backgroundColor: theme.palette.secondary.main,
        padding: `${upAndDownPaddingSeparated}rem 0 ${upAndDownPaddingSeparated}rem 10rem`,
        zIndex: 1,
    },
    blackSection: {
        position: 'relative',
        overflow: 'hidden',
        minHeight: '35rem',
    },
    headerList: {
        minHeight: '34rem',
        minWidth: '16rem',
        padding: '1rem',
        backgroundColor: theme.palette.primary.main,
        borderRadius: '0.5rem 0rem 0rem 0.5rem',
        boxShadow: `0 0 50px 0 ${theme.palette.primary.main}`,
    },
    headerListContent: {
        "& *": { color: theme.palette.text.secondary },
        justifyContent: "center",
        fontSize: "2rem",
    },
    headerListLinks: {
        padding: ".5rem 0"
    },
    headerImage: {

        // left: 0,
        // transform: 'translateX(-50%)',//اگه تونستی مشکل ترنسفرمو حل کنی این دوتا خطو از حالت کامنت در بیار
        position: 'absolute',
        animation: 'spn infinite 90s linear',
        maxWidth: "35rem",
        left: "-19rem",
        [theme.breakpoints.down(769)]: {
            maxWidth: '25rem',
            left: '-13rem',
        },
    },
    blackSectionContent: {
        zIndex: "2",
    },
    welcomeBanner: {
        padding: "8rem 5rem 10rem 0",
        flexBasis: "100%",
    },
    welcomeTexts: {
        fontSize: "4rem"
    },
    nameSiteContaiter: {
        whiteSpace: "nowrap",
        position: 'relative',
    },
    siteName: {
        fontFamily: "andalus",
        position: 'absolute',
        transform: 'translate(-3rem,-41%)',
        fontSize: "10rem",
        color: theme.palette.secondary.A100,
    },
})
)

export default useStyles;