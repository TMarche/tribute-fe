import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import TributeOverview from "../TributeOverview";

const Tributes = () => {
    const [tributes, setTributes] = useState([]);
    const [name, setName] = useState("");
    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:3333/api/tribute",
        })
            .then((response) => {
                setTributes(response.data.tributes);
            })
            .catch((response) => {
                console.log("Error! Could not get tributes!");
                console.log(response);
            });
    }, []);

    const handleAdd = () => {
        if (name) {
            axios({
                method: "post",
                url: "http://localhost:3333/api/tribute",
                data: {
                    name,
                },
            })
                .then((response) => {
                    console.log("Success! Added tribute");
                    console.log(response.data);
                    setTributes([...tributes, name]);
                    setName("");
                })
                .catch((response) => {
                    console.log("Error! Could not add tribute!");
                    console.log(response);
                });
        }
    };

    return (
        <>
            <div>TRIBUTES</div>
            <div>
                <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <button onClick={handleAdd}>+</button>
                Add
            </div>
            <div>
                {tributes.map((name) => (
                    <TributeOverview name={name} />
                ))}
            </div>
        </>
    );
};

export default Tributes;
