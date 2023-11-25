import { makeStyles } from '@material-ui/styles'
const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center",
    },
    image: {
        width: "calc(50% + 15rem)",
        margin: "0 auto",
        objectFit: "contain",
    },
    titleClass: {
        color: theme.palette.text.secondary,
        padding: '5rem 2rem 2rem',
        fontSize: '2rem !important',
    },
    text: {
        paddingTop: "3rem",
        textAlign: "justify",
    },
})
)
export default useStyles;