import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import LineChart from "../../components/LineChart";
import Header from "../../components/Header";
import API from "../../utils/API";

const Line = () => {
    const [genreSales, setGenreSales] = useState([]);
    const [genres, setGenres] = useState([]);

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

    const loadTopGenres = (limit, signal) => {
        API.getTopGenreSales(limit, signal)
            .then((res) => {
                setGenres(res.data);
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
        loadTopGenres(10, signal);

        return () => {
            controller.abort();
        };
    }, []);

    return (
        <Box sx={{ margin: "20px" }}>
            <Header title="Top Genres" />

            <Box sx={{ height: "75vh" }}>
                <LineChart idList={genres} rawData={genreSales} />
            </Box>
        </Box>
    );
};

export default Line;
