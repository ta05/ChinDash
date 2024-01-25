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
    PeopleOutlined,
    ReceiptOutlined,
    ContactsOutlined,
    PersonOutlined,
    CalendarTodayOutlined,
    HelpOutlined,
    BarChartOutlined,
    PieChartOutlined,
    TimelineOutlined,
    MenuOutlined,
    MapOutlined,
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
                minHeight: "100vh",
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
                            title="Manage Team"
                            to="/team"
                            icon={<PeopleOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                            isCollapsed={isCollapsed}
                        />
                        <Item
                            title="Contacts Information"
                            to="/contacts"
                            icon={<ContactsOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                            isCollapsed={isCollapsed}
                        />
                        <Item
                            title="Invoices Balances"
                            to="/invoices"
                            icon={<ReceiptOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                            isCollapsed={isCollapsed}
                        />
                        <Item
                            title="Profile Form"
                            to="/form"
                            icon={<PersonOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                            isCollapsed={isCollapsed}
                        />
                        <Item
                            title="Calendar"
                            to="/calendar"
                            icon={<CalendarTodayOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                            isCollapsed={isCollapsed}
                        />
                        <Item
                            title="FAQ Page"
                            to="/faq"
                            icon={<HelpOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                            isCollapsed={isCollapsed}
                        />
                        <Item
                            title="Bar Chart"
                            to="/bar"
                            icon={<BarChartOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                            isCollapsed={isCollapsed}
                        />
                        <Item
                            title="Pie Chart"
                            to="/pie"
                            icon={<PieChartOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                            isCollapsed={isCollapsed}
                        />
                        <Item
                            title="Line Chart"
                            to="/line"
                            icon={<TimelineOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                            isCollapsed={isCollapsed}
                        />
                        <Item
                            title="Geography Chart"
                            to="/geography"
                            icon={<MapOutlined />}
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
