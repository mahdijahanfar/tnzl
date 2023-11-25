import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    menuLines: {
        backgroundColor: theme.palette.text.primary,
        borderRadius: "1rem",
        paddingTop: ".6rem",
        position: 'absolute',
    },
    halfMenuLines: {
        width: "60%"
    },
    halfMenuLinesTop: {
        top: 0,
    },
    halfMenuLinesBottom: {
        bottom: 0,
        left: 0,
    },
    menuIcon: {
        cursor: 'pointer',
        position: 'absolute',
        top: "2.5rem",
        right: '5%',
        width: '6rem',
        height: "3rem",
        zIndex: "3",
    },
    compeleteMenuLinesMiddle: {
        top: '50%',
        position: 'absolute',
        width: ' 100%',
        transform: 'translateY(-50%)',
    },
})
)

export default useStyles;