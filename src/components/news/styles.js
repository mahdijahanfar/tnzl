
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
    newsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingBottom: '7rem',
    },
    otherNews: {
        flex: '1 0 40%',
    },
    btnLink: {
        padding: "0.5rem 4rem",
        borderRadius: "0.3rem",
        backgroundColor: theme.palette.secondary.A100,
        color: theme.palette.primary.light,
    },
    btnLinkWrapper: {
        textAlign:"left",
    },
    lastNewsWrapper: {
        padding: '1rem'
    },
    newsPadders: {
        display: 'flex',
        padding: '1rem',
        minWidth: "31rem",
    },
    newsDataBlock: {
        flex: "1",
        paddingRight: '1rem',
        width: '10rem',
    },
    newsDataText: {
        color: theme.palette.primary.light,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    newsImagesWrappers: {

        width: '14rem',
        height: '10rem',


    },
    newsImages: {
        width: '100%',
        height: '100%',
        objectFit: "cover",
    },
    newsLastImage: {
        width: '100%',
        height: '100%',
        objectFit: "cover",
    },
    noWrap: {
        whiteSpace: "nowrap",
    },
    selectedNews: {
        minWidth: '20%',
        flex: '1 0 60%',
        position:"relative",
        overflow:"hidden",
        "&::before":{
            content:"''",
            position:"absolute",
            width:"100%",
            bottom:0,
            boxShadow:`0px 0px 60px 55px ${theme.palette.primary.main}`
        },
    },
    newsDateBlock: {
        padding: "1rem 0",
    },
    selectedNewsData: {
        color: theme.palette.primary.light,
        paddingTop: "1rem",
        maxHeight: '20rem',
        overflow: 'hidden',
    },
    newsTitles: {
        color: theme.palette.text.secondary,
        fontSize: "2rem",
        padding: '5rem 2rem 2rem',
    },
    mainImageWrapper: {
        width: '100%',
        height: '46rem',
    },
    newsDataTitle: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
})
)


export default useStyles;