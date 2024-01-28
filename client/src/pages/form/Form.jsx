import React, { useEffect, useState } from "react";
import API from "../../utils/API";

const Form = () => {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        loadTracks();
    }, []);

    const loadTracks = () => {
        API.getTracks()
            .then((res) => {
                setTracks(res.data);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            {tracks.map((track, index) => (
                <div key={index}>{track["Name"]}</div>
            ))}
        </div>
    );
};

export default Form;
