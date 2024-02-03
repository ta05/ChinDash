import React, { useEffect, useState } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { v4 as uuidv4 } from "uuid";
import Header from "../../components/Header";
import API from "../../utils/API";

const Table = () => {
    const [genres, setGenres] = useState([]);
    const [genreSales, setGenreSales] = useState([]);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const dateComparator = (v1, v2) => Date.parse(v1) - Date.parse(v2);

    const columns = [
        {
            field: "YearMonth",
            headerName: "Date",
            editable: false,
            flex: 1,
            sortComparator: dateComparator,
        },
        {
            field: "Genre",
            headerName: "Genre",
            editable: false,
            flex: 1,
        },
        {
            field: "UnitsSold",
            headerName: "Tracks Sold",
            type: "number",
            flex: 1,
            editable: false,
        },
    ];

    const loadGenreSales = (signal) => {
        API.getGenreMonthlySales(signal)
            .then((res) => {
                setGenreSales(res.data);
            })
            .catch((err) => {
                if (err === "AbortError") {
                    console.log("cancelled!");
                } else {
                    console.log(err);
                }
            });
    };

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        loadGenreSales(signal);

        return () => {
            controller.abort();
        };
    }, []);

    return (
        <Box sx={{ margin: "20px" }}>
            <Header title="Monthly Genre Sales" />
            <Box
                sx={{
                    margin: "40px 0 0 0",
                    height: "80vh",
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                }}
            >
                <DataGrid
                    rows={genreSales}
                    columns={columns}
                    getRowId={uuidv4}
                    getRowHeight={() => "auto"}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 25,
                            },
                        },
                    }}
                    pageSizeOptions={[25]}
                    disableRowSelectionOnClick
                />
            </Box>
        </Box>
    );
};

export default Table;
