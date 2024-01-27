import React, { useEffect, useState } from "react";
import API from "../../utils/API";

const Team = () => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        loadGenres();
    }, []);

    const loadGenres = () => {
        API.getGenres()
            .then((res) => {
                setGenres(res.data);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            {genres.map((genre, index) => (
                <h2 key={index}>{genre["Name"]}</h2>
            ))}
        </div>
    );
};

export default Team;
