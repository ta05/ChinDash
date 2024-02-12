import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    InputLabel,
    Select,
    MenuItem,
    useMediaQuery,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/Header";
import API from "../../utils/API";

const Form = () => {
    const isNonMobile = useMediaQuery("min-width:600px");
    const [tracks, setTracks] = useState([]);

    const [formObject, setFormObject] = useState({
        quantity: 1,
        trackId: 0,
        track: "",
        unitPrice: 0,
    });

    const [quantity, setQuantity] = useState(1);
    const [selectedTrack, setSelectedTrack] = useState("");
    const [unitPrice, setUnitPrice] = useState(0);

    const userSchema = yup.object().shape({
        quantity: yup.number().required("required"),
    });

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const invoiceId = uuidv4();
        const invoiceLineId = uuidv4();

        const invoice = {
            invoiceId,
            invoiceDate: Date.now(),
            total: formObject.quantity * formObject.unitPrice,
        };

        const invoiceLine = {
            invoiceLineId,
            invoiceId,
            trackId: formObject.trackId,
            unitPrice: formObject.unitPrice,
            quantity: formObject.quantity,
        };

        API.addInvoice(invoice)
            .then(() => {
                API.addInvoiceLine(invoiceLine)
                    .then(() =>
                        setFormObject({
                            quantity: 1,
                            trackId: 0,
                            track: "",
                            unitPrice: 0,
                        })
                    )
                    .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
    };

    const handleQuantityChange = (event) => {
        setFormObject({
            ...formObject,
            quantity: event.target.value,
        });

        setQuantity(event.target.value);
    };

    const handleTrackChange = (event, child) => {
        setFormObject({
            ...formObject,
            track: event.target.value,
            trackId: child.props.trackid,
            unitPrice: parseFloat(child.props.unitprice),
        });

        setSelectedTrack(event.target.value);
        setUnitPrice(parseFloat(child.props.unitprice));
    };

    const loadTracks = (signal) => {
        API.getTracks(signal)
            .then((res) => {
                setTracks(
                    res.data.toSorted((a, b) =>
                        a.Name > b.Name ? 1 : b.Name > a.Name ? -1 : 0
                    )
                );
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

            <form>
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
                    <InputLabel id="quantity-label">Quantity</InputLabel>
                    <Select
                        labelId="quantity-label"
                        id="quantity"
                        value={formObject.quantity}
                        onChange={handleQuantityChange}
                        autoWidth
                        label="quantity"
                        MenuProps={{
                            PaperProps: { style: { maxHeight: "20%" } },
                        }}
                    >
                        {[...Array(99).keys()].map((i) => (
                            <MenuItem key={i + 1} value={i + 1}>
                                {i + 1}
                            </MenuItem>
                        ))}
                    </Select>

                    <InputLabel id="track-label">Track</InputLabel>
                    <Select
                        labelId="track-label"
                        id="track"
                        value={formObject.track}
                        onChange={handleTrackChange}
                        autoWidth
                        label="Select Track"
                        defaultValue=""
                        MenuProps={{
                            PaperProps: { style: { maxHeight: "33%" } },
                        }}
                    >
                        {tracks.map(({ TrackId, Name, UnitPrice }) => (
                            <MenuItem
                                key={TrackId}
                                value={Name}
                                trackid={TrackId}
                                unitprice={UnitPrice}
                            >
                                {Name}
                            </MenuItem>
                        ))}
                    </Select>
                    <div>
                        $
                        {(formObject.quantity * formObject.unitPrice).toFixed(
                            2
                        )}
                    </div>
                </Box>
                <Button onClick={handleFormSubmit}>Purchase</Button>
            </form>
        </Box>
    );
};

export default Form;
