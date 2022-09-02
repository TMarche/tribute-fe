import { useState } from "react";
import TributeOverview from "../TributeOverview";

const Tributes = () => {
    const [tributes, setTributes] = useState([]);
    const [name, setName] = useState("");

    return (
        <>
            <div>TRIBUTES</div>
            <div>
                <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <button
                    onClick={() => {
                        if (name) {
                            setTributes([...tributes, name]);
                            setName("");
                        }
                    }}
                >
                    +
                </button>
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
