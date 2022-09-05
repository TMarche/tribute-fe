import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { calculateHitPoints } from "../../helpers";
import StatBlock from "../StatBlock";
import styled from "styled-components";

const TributeDetail = ({ className }) => {
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

    return (
        <div className={className}>
            TRIBUTE DETAIL for {tribute.name}
            <div className="stat-blocks">
                Stats
                <StatBlock stat="str" tribute={tribute} />
                <StatBlock stat="dex" tribute={tribute} />
                <StatBlock stat="con" tribute={tribute} />
                <StatBlock stat="int" tribute={tribute} />
                <StatBlock stat="wis" tribute={tribute} />
                <StatBlock stat="cha" tribute={tribute} />
            </div>
            <div>
                <div>Hitpoints: {calculateHitPoints(tribute.con)}</div>
                <div>Weapon: Placeholder</div>
                <div>Inventory: Placeholder</div>
            </div>
            <div>
                Allies: <button>Graph</button>
            </div>
            <div>
                Enemies: <button>Graph</button>
            </div>
            <div>Feats/Traits</div>
        </div>
    );
};

export default styled(TributeDetail)`
    display: flex;
    flex-direction: column;

    .stat-blocks {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
`;
