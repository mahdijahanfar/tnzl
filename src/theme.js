import { createTheme } from '@material-ui/core/styles'
import { alpha } from '@material-ui/core';

const mainBackgroundColor = "#1b1b1b"//black
const pettyBackgroundColor = "#0c3b2e"//dark green
const mainTextColor = "#bb8a52"//dark brown
const pettyTextColor = "#ffba00"//yellow
const white = "#fff"//white
const lightGreen = "#1d9070"//light green
const betweenYellowLightGreen = '#6d9773'
const red = "#f00"//red // این رنگ باید حذف بشه چون از خودم اضافه کردم

const theme = createTheme({
    typography: {
        "fontFamily": `'iransans',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif !important`,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500,
    },
    palette: {
        primary: {
            main: mainBackgroundColor,
            light: white,

        },
        secondary: {
            main: pettyBackgroundColor,
            light: lightGreen,
            A100: betweenYellowLightGreen,
            A200: red,
        },
        text: {
            primary: mainTextColor,
            secondary: pettyTextColor,
        },
    },
    overrides: {
        MuiTypography: {
            root: {
                fontFamily: `'iransans',
                    -apple-system,
                    BlinkMacSystemFont,
                    Segoe UI,
                    Roboto,
                    Oxygen,
                    Ubuntu,
                    Cantarell,
                    Fira Sans,
                    Droid Sans,
                    Helvetica Neue,
                    sans-serif !important`,
                color: mainTextColor,
            },
            body1: {
                fontSize: "unset"
            }
        },
        MuiListItemText: {
            root: {
                flex: "unset"
            },
            primary: {
                textAlign: "right",
                color: white,
            },
        },
        MuiInput: {
            underline: {
                "&:hover": {
                    "&:not(.Mui-disabled)": {
                        "&:before": {
                            borderBottom: "unset"
                        }
                    }
                },
                "&:after": {
                    borderBottom: "unset"
                },
                "&:before": {
                    borderBottom: "unset"
                },
            }
        },
        MuiSvgIcon: {
            root: {
                fontSize: "2.5rem"
            },
        },
        MuiInputBase: {
            root: {
                fontSize: "unset",
                "& .css-1q60rmi-MuiAutocomplete-endAdornment": {
                    top: "unset",
                },
            },
            adornedEnd: {
                paddingRight: "30px !important"
            },
            input: {
                padding: "unset"
            },
        },
        MuiSelect: {
            select: {
                paddingTop: ".5rem",
                paddingBottom: ".5rem",
            },
            icon: {
                top: "unset"
            }
        },
        MuiMenuItem: {
            root: {
                fontSize: "unset",
            },
        },
        MuiListItemIcon: {
            root: {
                minWidth: "4rem",
                color: pettyTextColor,
            },
        },
        MuiListItem: {
            button: {
                color: white,
                filter: `drop-shadow(0px 0px 6px ${pettyTextColor})`
            },
        },
        MuiDrawer: {
            paper: {
                padding: "0 2rem",
                backgroundColor: "unset",
                boxShadow: `inset 0px 0px 150px 0px ${pettyTextColor} !important`,
            }
        },

        MuiDialog: {
            paper: {
                overflowY: "unset",
                backgroundColor: "unset",
            },
            paperScrollPaper: {
                maxHeight: "unset",
                justifyContent: "center"
            },
            paperFullScreen: {
                maxWidth: "90%",
                height: "unset",
            },
        },
        MuiPopover: {
            paper: {
                backgroundColor: 'unset',
                backdropFilter: 'blur(5px)',
                boxShadow: `inset 0px 0px 40px 0px ${alpha(pettyTextColor, 0.7)}`,
            },
        },
        MuiBackdrop: {
            root: {
                backgroundColor: "unset",
                backdropFilter: 'blur(30px)',
            },
        },

        MuiButton: {
            root: {
                fontSize: "unset",
                "&:hover": {
                    backgroundColor: "transparent !important",
                    backdropFilter: "blur(4px)",
                    boxShadow: `inset 0 0 20px 0px ${pettyTextColor}`,
                    borderRadius: "30px",
                },
                transition: "all .5s",
            },
        },
        MuiDivider: {
            root: {
                backgroundColor: alpha(pettyTextColor, 0.18)
            },

        },
    }
})

export default theme;