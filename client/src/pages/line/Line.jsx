import React, { useEffect } from "react";
import LineChart from "../../components/LineChart";
import API from "../../utils/API";

const Line = () => {
    const [genreSales, setGenreSales] = useState([]);

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

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        loadGenreSales(signal);

        return () => {
            controller.abort();
        };
    }, []);

    return (
        <div>
            <LineChart data={genreSales} />
        </div>
    );
};

export default Line;
