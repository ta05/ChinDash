import React from "react";
import { Typography, Box, useTheme } from "@mui/material";

const Header = ({ title }) => {
    const theme = useTheme();

    return (
        <Box>
            <Typography
                variant="h2"
                color={theme.palette.secondary[100]}
                fontWeight="bold"
                sx={{ mb: "5px" }}
            >
                {title}
            </Typography>
        </Box>
    );
};

export default Header;
