import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    searchField: {
        backgroundColor: theme.palette.primary.light,
        paddingRight: '1.5rem',
        paddingLeft: '.5rem',
        borderRadius: '4rem',
        width: "100%",
        display: "inherit",
        "& .css-b7k0tb-MuiAutocomplete-listbox": {
            fontSize: '1.4rem',
            [theme.breakpoints.down(500)]: {
                fontSize: '1.3rem',
            },
            fontFamily: 'iransans',
        },
    },
    inputBaseHeader: {
        "& input": {
            color: theme.palette.primary.main,
        },
        flexBasis: "100%",
    },
    headerSearchSection: {
        padding: '0 1rem',
        maxWidth: "calc(10% + 25rem)",
        zIndex: 2,

    },
    searchIconHeader: {
        padding: '0 .5rem',
    },
    switchAbleButtons: {
        transition: 'background .5s',
        borderRadius: "3rem",
        verticalAlign: "middle",
        textAlign: "center",
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.secondary.main,
        cursor: "pointer",
    },
    switchedButtons: {
        backgroundColor: theme.palette.text.secondary + " !important",
    },
    buttonsContainer: {
        width: '100%',
        textAlign: 'center',
    },
    padderDiv: {
        padding: "0 .3rem  2%",
        display: 'inline-block',
        width: '20%',
    },
    inputs: {
        "& ::placeholder": {
            color: theme.palette.secondary.main,
            opacity: .6,
        },
    },
})
)

export default useStyles;
