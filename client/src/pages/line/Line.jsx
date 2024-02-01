import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import LineChart from "../../components/LineChart";
import API from "../../utils/API";

const Line = () => {
    const [genreSales, setGenreSales] = useState([]);
    const [genres, setGenres] = useState([]);

    const loadGenreSales = (signal) => {
        API.getGenreSales(signal)
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

    const loadGenres = (signal) => {
        API.getGenres(signal)
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
        loadGenres(signal);

        return () => {
            controller.abort();
        };
    }, []);

    return (
        <Box sx={{ height: "75vh" }}>
            <LineChart idList={genres} rawData={genreSales} />
        </Box>
    );
};

export default Line;
