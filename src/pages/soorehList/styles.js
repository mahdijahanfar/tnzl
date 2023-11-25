import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/styles'
import { alpha } from '@mui/material';

const useStyles = makeStyles(theme => {
    const gray = theme.palette.primary.light;
    const yellow = theme.palette.text.secondary;
    const green = theme.palette.secondary.light;
    const brown = theme.palette.text.primary;
    const red = theme.palette.secondary.A200
    const listRowsPadding = 2
    return ({
        root: {
            fontSize: "2rem",
        },
        column: {
            flex: 1,
            [theme.breakpoints.down(1200)]: {
                flexBasis: '100%',
                padding: "0 calc(6% + 1rem)"
            },
            [theme.breakpoints.down(600)]: {
                padding: "0"
            },
        },
        rowedData: {
            padding: `${listRowsPadding}rem`,
            cursor: 'pointer',
            position: 'relative',
        },
        hasAfter: {
            "&::after": {
                position: 'absolute',
                content: "''",
                left: 0,
                top: 0,
                backgroundColor: alpha(yellow, .5),
                width: "0",
                height: "100%",
                transition: 'all 1s cubic-bezier(0.58, 0.44, 0.37, 0.34)',
                backdropFilter: "blur(20px)",
            },

            "&::before": {
                position: 'absolute',
                content: "''",
                right: 0,
                top: 0,
                backgroundColor: alpha(yellow, .5),
                width: "0",
                height: "100%",
                transition: 'all 1s cubic-bezier(0, 0, 1, 0.98)',
                backdropFilter: "blur(20px)",
            },

            "&:hover": {
                "&::after": {
                    borderRadius: '.2rem',
                    backgroundColor: alpha(grey['100'], .1),
                    width: "100%",
                    transform: 'rotateY(540deg)',
                    height: '50%',
                    backdropFilter: "unset",
                },
                "&::before": {
                    borderRadius: '.2rem',
                    backgroundColor: alpha(grey['100'], .1),
                    width: "100%",
                    transform: 'rotateY(540deg)',
                    height: '50%',
                    top: "50%",
                    backdropFilter: "unset",
                },
            },
        },

        hasBefore: {
            "&::before": {
                position: 'absolute',
                content: "''",
                right: 0,
                top: 0,
                backgroundColor: alpha(red, .5),
                width: "0",
                height: "100%",
                transition: 'all 1s',
                backdropFilter: "blur(20px)",
            },
            "&::after": {
                position: 'absolute',
                content: "''",
                left: 0,
                top: 0,
                backgroundColor: alpha(red, .5),
                width: "0",
                height: "100%",
                transition: 'all 1s',
                backdropFilter: "blur(20px)",
            },
            "&:hover": {
                "&::before": {
                    borderRadius: '.2rem',
                    backgroundColor: alpha(grey['100'], .1),
                    width: "100%",
                    height: "50%",
                    backdropFilter: "unset",
                },
                "&::after": {
                    borderRadius: '.2rem',
                    backgroundColor: alpha(grey['100'], .1),
                    width: "100%",
                    height: "50%",
                    top: "50%",
                    backdropFilter: "unset",
                },
            },
        },
        headerList: {
            borderColor: alpha(gray, .5) + "!important",
            borderTop: "1px solid",
            borderBottom: "1px solid",
            padding: `${listRowsPadding}rem`,
        },
        yellowText: {
            color: yellow + " !important",
        },
        greenText: {
            color: green + " !important",
        },
        brownText: {
            color: brown + " !important",
        },
    })
}
)


export default useStyles;