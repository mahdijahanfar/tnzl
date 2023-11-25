import { alpha } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center",
    },
    ckContainers: {
        padding: "1rem",
        maxWidth: "calc(50% - 2rem)",
        [theme.breakpoints.down(993)]: {
            maxWidth: "calc(100% - 2rem) !important",
        },
        flexGrow: 1,
    },
    everyInput: {

    },
    title: {
        borderRadius: '2rem 2rem 0 0',
        border: 'none',
        padding: "1rem",
        width: 'calc(100% - 4rem)',
    },
    upLoadContainer: {
        backgroundColor: theme.palette.primary.light,
        width: "calc(50% + 5rem)",
        display: "inline-flex",
        justifyContent: "space-around",
        padding: '2rem 0',
    },
    btnLinkWrapper: {
        padding: '4rem 0 2rem',
        width: "100%",
    },
    btnLink: {
        padding: "0.5rem 4rem",
        borderRadius: "0.3rem",
        backgroundColor: theme.palette.secondary.A100,
        color: theme.palette.primary.light,
        textShadow: `0 0 5px ${theme.palette.primary.light}`,
        transition: "background-color .7s,text-shadow .8s, color 1s",
        "&:hover": {
            backgroundColor: "unset",
            color: theme.palette.text.secondary,
            textShadow: `0 0 5px ${theme.palette.text.secondary}`,
        },
    },
    upLoadButtons: {
        cursor: "pointer",
        border: `1px solid ${alpha(theme.palette.primary.main, 0.35)}`,
        borderRadius: "1rem",
        padding: ".5rem",
        flexBasis: '9rem',
    },
    upLoadTexts: {
        color: theme.palette.secondary.main,
    },
})
)

export default useStyles;