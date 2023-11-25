import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
    booksContainer: {
        padding: '5rem 0',
    },
    page: {
        // این عرض و طول و پدینگ و بردر ردیوس , با هم یه نسبت خاصی دارن , مثلا تقسیم طول بر عرض همیشه , یه عدد خاصی خیلی نزدیک به عدد 0.7137758743754461 میشه
        // اگه فونت عوض بشه , اونوقت شاید لازم باشه این عرض و طول و پدینگ (و شاید بردر ردیوس) با همون نسبت خاص , بیشتر یا کمتر بشه 
        width: "40.3677rem",
        height: "56.555568rem",
        padding: "6.21666rem",
        borderRadius: "3.10833rem",

        [theme.breakpoints.up(601)]: {
            width: "56.7675rem",
            height: "79.5312675rem",
            padding: "8.742195rem",
            borderRadius: "4.3710975rem",
        },
        [theme.breakpoints.up(769)]: {
            width: "80.736rem",
            height: "113.111136rem",
            padding: "12.433344rem",
            borderRadius: "6.216672rem",
        },
        [theme.breakpoints.up(993)]: {
            width: "84.1rem",
            height: "117.8241rem",
            padding: "12.9514rem",
            borderRadius: "6.4757rem",
        },

        backgroundImage: "url('./images/bookPage.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundOrigin: 'border-box',
    },
    pageText: {
        lineHeight: 2.5,
        maxHeight: '100%',
        overflow: 'auto',
        textAlign: 'justify',
        color: theme.palette.text.secondary
        // fontFamily: "uthmantaha",
        // این خط بالا رو وقتی فعال کن که تونستی فونت عثمان طه رو از اینترنت جور کنی
    },
    pageTitle: {
        fontSize: '2rem !important',
        fontWeight: '600',
        paddingBottom: '1rem',
    },
}))
export default useStyles;