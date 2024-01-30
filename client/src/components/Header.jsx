import React from "react";
import { Typography, Box, useTheme } from "@mui/material";

const Header = ({ title }) => {
    const theme = useTheme();

    return (
        <Box sx={{ mb: "30px" }}>
            <Typography
                variant="h2"
                color={theme.palette.secondary[100]}
                fontWeight="bold"
                sx={{ margin: "0 0 5px 0" }}
            >
                {title}
            </Typography>
        </Box>
    );
};

export default Header;
