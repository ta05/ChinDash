import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    InputLabel,
    Select,
    MenuItem,
    useMediaQuery,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/Header";
import API from "../../utils/API";

const Form = () => {
    const isNonMobile = useMediaQuery("min-width:600px");
    const [tracks, setTracks] = useState([]);
    const [qty, setQty] = useState(0);

    const intialValues = {
        qty: 1,
        track: "",
        unit_price: 0.99,
    };

    const userSchema = yup.object().shape({
        qty: yup.number().required("required"),
    });

    const handleSubmit = (values) => {
        console.log(values);
    };

    const handleChange = (event) => {
        setQty(event.target.value);
    };

    const loadTracks = (signal) => {
        API.getTracks(signal)
            .then((res) => {
                setTracks(res.data);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        loadTracks(signal);

        return () => {
            controller.abort();
        };
    }, []);

    return (
        <Box sx={{ margin: "20px" }}>
            <Header title="Purchase Tracks" />

            <form onSubmit={handleSubmit}>
                <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    sx={{
                        "& > div": {
                            gridColumn: isNonMobile ? undefined : "span 4",
                        },
                    }}
                >
                    <InputLabel id="quantity-label">Qty</InputLabel>
                    <Select
                        labelId="quantity-label"
                        id="qty"
                        value={qty}
                        onChange={handleChange}
                        autoWidth
                        label="Qty"
                    >
                        <MenuItem value="">
                            <em>0</em>
                        </MenuItem>
                        {[...Array(99).keys()].map((i) => (
                            <MenuItem value={i + 1}>{i + 1}</MenuItem>
                        ))}
                    </Select>
                </Box>
            </form>
        </Box>
    );
};

export default Form;
