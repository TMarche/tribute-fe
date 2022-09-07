import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import TributeOverview from "../TributeOverview";

const Tributes = ({ className }) => {
    const [tributes, setTributes] = useState([]);
    const [name, setName] = useState("");

    useEffect(() => {
        // Fetch all tributes
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
        // Handle adding a single tribute
        if (name) {
            axios({
                method: "post",
                url: "http://localhost:3333/api/tribute",
                data: {
                    name,
                },
            })
                .then((response) => {
                    const { tribute } = response.data;
                    console.log("Success! Added tribute");
                    console.log(response.data);
                    setTributes([...tributes, tribute]);
                    setName("");
                })
                .catch((response) => {
                    console.log("Error! Could not add tribute!");
                    console.log(response);
                });
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleAdd();
        }
    };

    return (
        <div className={className}>
            <div>TRIBUTES</div>
            <div>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
            </div>
            <div>
                <button onClick={handleAdd}>+</button>
                Add
            </div>
            <div>
                {tributes.map((tribute) => (
                    <TributeOverview
                        key={tribute._id}
                        tribute={tribute}
                        setTributes={setTributes}
                    />
                ))}
            </div>
        </div>
    );
};

export default styled(Tributes)`
    /* padding: 3rem; */
`;
