import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
    switchAbleButtons: {
        transition: 'background 1s',
        borderRadius: "2rem",
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.secondary.main + " !important",
        cursor: "pointer",
        "& *": {
            color: theme.palette.secondary.main + " !important",
        },
    },
    switchedButtons: {
        backgroundColor: theme.palette.text.secondary + " !important",
    },
    buttonsContainer: {
        display: "grid",
        maxWidth: "70rem",
        gridTemplateColumns: 'repeat(auto-fit, minmax(11rem, 1fr))',
        gridGap: '.5rem',
    },
})
)


export default useStyles;