import { makeStyles } from '@material-ui/styles'
import { alpha } from '@material-ui/core';

const useStyles = makeStyles(theme => {
    return ({
        root: {
            position: "relative",
            padding: "5rem",
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.main,
            "&::after": {
                content: "'design by armin rayan espadan'",
                position: 'absolute',
                color: alpha(theme.palette.primary.light, .2),
                bottom: 0,
                zIndex: 50,
            }
        },
        wavedRoot: {
            backgroundColor: theme.palette.primary.main + " !important",
            "& *": {
                zIndex: "2"
            },
            "&::before": {
                content: "''",
                position: "absolute",
                width: "100%",
                height: "100%",
                zIndex: 1 + "!important",
                backgroundColor: theme.palette.secondary.main,
                left: 0,
                top: 0,
                clipPath: "path('M0 0 S 210 0 470 90,S 1160 330 1600 0,S 1890 0 2100 0,L 10000 10000 10000 10000,L 0 1000 0 1000, Z')"
            },
        },
        tableIcons: {
            paddingRight: '.5rem',
        },
        addressRowContainers: {
            padding: "1rem"
        },
        symbolFooter: {
            width: '20rem',
        },
        homeImage: {
            [theme.breakpoints.up(769)]: {
                transform: 'translate(10rem,5rem)',
            }
        },
    })
})


export default useStyles;