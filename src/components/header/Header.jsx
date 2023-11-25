import { Grid, Typography, useMediaQuery } from '@material-ui/core';
import React from 'react';
import TanzilMenuIcon from '../tanzilMenuIcon/TanzilMenuIcon';
import useStyles from './styles';
import useTheme from '@material-ui/styles/useTheme';
import { Link, useLocation } from 'react-router-dom';
import { ListItem, ListItemText } from '@material-ui/core';
import HeaderSearch from "./../headerSearch/HeaderSearch"
const Header = () => {
    const { pathname } = useLocation()

    const theme = useTheme()
    const isWindowMore993 = useMediaQuery(theme.breakpoints.up(993))
    const {
        greenSection,
        blackSection,
        headerList,
        headerListContent,
        headerListLinks,
        headerImage,
        blackSectionContent,
        welcomeBanner,
        welcomeTexts,
        nameSiteContaiter,
        siteName,
    } = useStyles()
    return (
        <header>
            <Grid container wrap={'nowrap'} >
                <Grid item container className={blackSection} wrap="nowrap" justifyContent={'center'} alignItems={"center"} >
                    {(!isWindowMore993 && pathname === "/") && <TanzilMenuIcon />}
                    <Grid className={blackSectionContent} container justifyContent={'center'} >
                        {
                            pathname === "/" ?
                                <div className={welcomeBanner} >
                                    <Typography className={welcomeTexts}  >به سایت</Typography>
                                    <Typography className={welcomeTexts + " " + nameSiteContaiter}  >بین المللی<span className={siteName}  >{" "}تنزیل</span></Typography>
                                    <Typography className={welcomeTexts}  >خوش آمدید</Typography>
                                </div>
                                : <TanzilMenuIcon />
                        }
                        <HeaderSearch />
                    </Grid>
                    <img className={headerImage} src="./images/compeleteCurve.jpg" alt="" />
                </Grid>
                {isWindowMore993 &&
                    <Grid item className={greenSection}>
                        <div className={headerList}>
                            {pathname === "/" &&
                                [
                                    { name: "جستجو در قرآن", to: "/booksWorkshop" },
                                    { name: "فهرست سوره ها", to: "/soorehList" }
                                ].map(({ name, to }, index) =>
                                    <Link key={index} className={headerListLinks} to={to} >
                                        <ListItem className={headerListContent} button>
                                            <ListItemText primary={name} />
                                        </ListItem>
                                    </Link>
                                )
                            }
                        </div>
                    </Grid>
                }
            </Grid>
        </header>
    );
}

export default Header;