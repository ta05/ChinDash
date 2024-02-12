import {
    Sidebar as ProSidebar,
    Menu,
    MenuItem,
    menuClasses,
} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import {
    HomeOutlined,
    ReceiptOutlined,
    ContactsOutlined,
    Album,
    CalendarTodayOutlined,
    HelpOutlined,
    BarChartOutlined,
    PieChartOutlined,
    TimelineOutlined,
    MenuOutlined,
    MapOutlined,
    Paid,
} from "@mui/icons-material";
import { useState } from "react";

const Item = ({ title, to, icon, selected, setSelected, isCollapsed }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Link
            to={to}
            style={{ textDecoration: "none", color: colors.gray[100] }}
        >
            <MenuItem
                active={selected === title}
                rootStyles={{
                    ["." + menuClasses.button]: {
                        padding: !isCollapsed
                            ? "5px 5px 5px 5px !important"
                            : undefined,
                        "&:hover": {
                            color: colors.blueAccent[400] + " !important",
                            backgroundColor: "transparent !important",
                        },
                    },
                }}
                onClick={() => setSelected(title)}
                icon={icon}
            >
                {!isCollapsed && <Typography>{title}</Typography>}
            </MenuItem>
        </Link>
    );
};

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box
            sx={{
                display: "flex",
                height: "100%",
                minHeight: "110vh",
            }}
        >
            <ProSidebar
                backgroundColor={colors.primary[400]}
                collapsed={isCollapsed}
            >
                <Menu>
                    {/* Logo and Menu Icon */}
                    <MenuItem
                        icon={
                            isCollapsed ? (
                                <IconButton
                                    onClick={() => setIsCollapsed(!isCollapsed)}
                                >
                                    <MenuOutlined />
                                </IconButton>
                            ) : undefined
                        }
                        rootStyles={{
                            ["." + menuClasses.button]: {
                                "&:hover": {
                                    backgroundColor: "transparent !important",
                                    cursor: "default",
                                },
                            },
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    m1: "15px",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontVariant: "h6",
                                        color: colors.gray[100],
                                    }}
                                >
                                    ChinDash
                                </Typography>
                                <IconButton
                                    onClick={() => setIsCollapsed(!isCollapsed)}
                                >
                                    <MenuOutlined />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>
                    {/* User Profile */}
                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <img
                                    alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    src="../../assets/user.png"
                                    style={{
                                        cursor: "pointer",
                                        borderRadius: "50%",
                                    }}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h5"
                                    colors={colors.gray[100]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0 0" }}
                                >
                                    John Doe
                                </Typography>
                                <Typography
                                    variant="h6"
                                    color={colors.greenAccent[500]}
                                >
                                    Administrator
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    {/* Menu Items */}
                    <Box padding={isCollapsed ? undefined : "0 5% 0 5%"}>
                        <Item
                            title="Dashboard"
                            to="/"
                            icon={<HomeOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                            isCollapsed={isCollapsed}
                        />
                        <Item
                            title="Genre Sales"
                            to="/table"
                            icon={<Paid />}
                            selected={selected}
                            setSelected={setSelected}
                            isCollapsed={isCollapsed}
                        />
                        <Item
                            title="Buy Tracks"
                            to="/form"
                            icon={<Album />}
                            selected={selected}
                            setSelected={setSelected}
                            isCollapsed={isCollapsed}
                        />
                        <Item
                            title="Top Genres"
                            to="/line"
                            icon={<TimelineOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                            isCollapsed={isCollapsed}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;
