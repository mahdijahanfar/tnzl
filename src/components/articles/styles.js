import { makeStyles } from '@material-ui/styles'
const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: "2rem !important ",
    },
    header: {
        padding: '5rem 2rem 2rem',

    },
    headerText: {
        color: theme.palette.text.secondary,

    },
    positiveIcon: {
        border: '1px solid',
        borderRadius: "100%",
    },
    headerLinkText: {
        paddingRight: ".5rem",
    },
    articlesarticlesBlock: {
        padding: "0 6rem",
        position: "relative",
    },
    articlesContent: {
        transition: "transform 1s",
    },
    articlesWrapper: {
        [theme.breakpoints.up(500)]: {
            padding: "0 6rem",
        },
        position: "relative",
    },
    articlesScroller: {
        overflow: 'hidden',
    },
    everyArticleClass: {
        minWidth: '25rem',
        minWidth: 'calc(50% - 1rem)',
        [theme.breakpoints.up(769)]: {
            minWidth: 'calc(33.33% - 1rem)',
        },
        [theme.breakpoints.up(993)]: {
            minWidth: 'calc(25% - 1rem)',
        },
        padding: ".5rem",
    },
    imageWrapper: {
        display:"block",
        width: "100%",
        height: "20rem",
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    },
    articleContent: {
        backgroundColor: theme.palette.primary.light,
    },
    articleContentText: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        padding: ".4rem",
    },
    articleContentTitle: {
        fontSize: '2rem',
        color: theme.palette.secondary.main,
        padding: "1rem"
    },
    btnLink: {
        textShadow: `0 0 5px ${theme.palette.primary.light}`,
        padding: '0.5rem 3rem',
        borderRadius: '0.3rem',
        color: theme.palette.primary.light,
        backgroundColor: theme.palette.secondary.A100,
        transition:"background-color .7s,text-shadow .8s, color 1s",
        "&:hover": {
            backgroundColor: "unset",
            color:theme.palette.text.secondary,
            textShadow: `0 0 5px ${theme.palette.text.secondary}`,
        },
    },
    btnLinkContainer: {
        textAlign: "center",
        padding: "1rem"
    },
    buttons: {
        zIndex: 2,
        color: theme.palette.text.secondary,
        transform: 'translateY(50%)',
        position: "absolute",
        bottom: '50%',
        "& *": { fontSize: "7rem" },
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
        flexBasis: "100%"
    },
})
)
export default useStyles;