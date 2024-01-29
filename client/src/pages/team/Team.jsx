import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import API from "../../utils/API";

const Team = () => {
    const [genres, setGenres] = useState([]);
    const [genreSales, setGenreSales] = useState([]);

    const columns = [
        {
            field: "YearMonth",
            headerName: "Date",
            width: 150,
            editable: false,
        },
        {
            field: "Genre",
            headerName: "Genre",
            width: 150,
            editable: false,
        },
        {
            field: "UnitsSold",
            headerName: "Tracks Sold",
            type: "number",
            width: 150,
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
            <DataGrid
                rows={genreSales}
                columns={columns}
                getRowId={getRowId}
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
    );
};

export default Team;
