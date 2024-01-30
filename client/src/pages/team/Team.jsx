import React, { useEffect, useState } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import API from "../../utils/API";

const dateComparator = (v1, v2) => Date.parse(v1) - Date.parse(v2);

const Team = () => {
    const [genres, setGenres] = useState([]);
    const [genreSales, setGenreSales] = useState([]);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {
            field: "YearMonth",
            headerName: "Date",
            width: 250,
            editable: false,
            sortComparator: dateComparator,
        },
        {
            field: "Genre",
            headerName: "Genre",
            width: 250,
            editable: false,
        },
        {
            field: "UnitsSold",
            headerName: "Tracks Sold",
            type: "number",
            width: 250,
            editable: false,
        },
    ];

    useEffect(() => {
        loadGenreSales();
    }, []);

    const getRowId = () => {
        return Math.floor(Math.random() * 100000000);
    };

    const loadGenreSales = () => {
        API.getGenreSales()
            .then((res) => {
                setGenreSales(res.data);
            })
            .catch((err) => console.log(err));
    };

    return (
        <Box sx={{ height: 400, width: "100%" }}>
            <Header title="Genre Sales" subtitle="Monthly Sales" />
            <Box>
                <DataGrid
                    rows={genreSales}
                    columns={columns}
                    getRowId={getRowId}
                    getRowHeight={() => "auto"}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 24,
                            },
                        },
                    }}
                    pageSizeOptions={[24]}
                    disableRowSelectionOnClick
                />
            </Box>
        </Box>
    );
};

export default Team;
