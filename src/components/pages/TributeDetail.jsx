import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TributeDetail = () => {
    const [tribute, setTribute] = useState({});

    let { id } = useParams();

    useEffect(() => {
        // Fetch tributes
        axios({
            method: "get",
            url: `http://localhost:3333/api/tribute/${id}`,
        })
            .then((response) => {
                setTribute(response.data.tribute);
            })
            .catch((response) => {
                console.log("Error! Could not get tribute!");
                console.log(response);
            });
    }, [id]);

    return <div>TRIBUTE DETAIL for {tribute.name}</div>;
};

export default TributeDetail;
