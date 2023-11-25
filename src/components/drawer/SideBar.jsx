import React from 'react';
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, useMediaQuery } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { setRightDrawer } from './../../context/redux/actions/setDrawerAction';
import { Link, useLocation } from 'react-router-dom';
import { Home } from '@material-ui/icons';
import { Book } from '@material-ui/icons';
import { RotateRight } from '@material-ui/icons';
import { List as SoorehList } from '@material-ui/icons';
import useTheme from '@material-ui/styles/useTheme';

export default function SideBar() {
    const theme = useTheme()
    const isWindowMiner769 = useMediaQuery(theme.breakpoints.down(769))
    const { pathname } = useLocation()
    const drawer = useSelector(state => state.drawer)
    const dispatch = useDispatch()
    return (
        <Drawer
            anchor={"right"}
            open={drawer}
            onClose={() => dispatch(setRightDrawer(false))}
        >
            <Box
                sx={!isWindowMiner769 ? { width: 200 } : null}
                role="presentation"
                onClick={() => dispatch(setRightDrawer(false))}
                onKeyDown={() => dispatch(setRightDrawer(false))}
            >
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <RotateRight />
                        </ListItemIcon>
                    </ListItem>
                    {
                        [
                            { name: "خانه", to: "/", icon: <Home /> },
                            { name: "جستجو در قرآن", to: "/booksWorkshop", icon: <Book /> },
                            { name: "فهرست سوره ها", to: "/soorehList", icon: <SoorehList /> }
                        ].map(({ name, to, icon }, index) =>
                            pathname !== to &&
                            <div key={index}>
                                <Divider orientation={'horizontal'} />
                                <Link to={to} >
                                    <ListItem button>
                                        <ListItemIcon>
                                            {icon}
                                        </ListItemIcon>
                                        <ListItemText primary={name} />
                                    </ListItem>
                                </Link>
                            </div>
                        )
                    }
                </List>
            </Box>
        </Drawer>
    );
}
