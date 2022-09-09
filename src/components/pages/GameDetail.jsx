import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Transfer } from "antd";
import styled from "styled-components";

import { getTributes } from "../../requests/tribute.requests";

const GameDetail = ({ className }) => {
    const [game, setGame] = useState({});
    const [tributes, setTributes] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios({
            method: "get",
            url: `http://localhost:3333/api/game/${id}`,
        })
            .then((response) => {
                setGame(response.data.game);
            })
            .catch((response) => {
                console.log("Error! Could not get game!");
                console.log(response);
            });
    });

    useEffect(() => {
        getTributes(
            (response) => {
                setTributes(response.data.tributes);
            },
            (response) => {
                console.log("ERROR:", response);
            }
        );
    }, []);

    // Set source and target keys for Tributes
    const [tributeSourceData, setTributeSourceData] = useState([]);
    const [tributeTargetKeys, setTributeTargetKeys] = useState([]);
    const [tributeSelectedKeys, setTributeSelectedKeys] = useState([]);

    useEffect(() => {
        setTributeSourceData(
            tributes.map((tribute) => ({
                key: tribute._id,
                name: tribute.name,
            }))
        );
    }, [tributes]);

    const onTributeTransferChange = (nextTargetKeys) => {
        setTributeTargetKeys(nextTargetKeys);
    };

    const onTributeTransferSelectChange = (
        sourceSelectedKeys,
        targetSelectedKeys
    ) => {
        setTributeSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
    };

    // Set source and target keys for Events

    // Set source and target keys for Items

    return (
        <div className={className}>
            <div>
                GAME DETAIL FOR {game.name} {game.description}
            </div>
            <div>
                <button>SAVE</button>
            </div>
            <div>Map</div>
            <div className="container__transfer-tribute">
                <div>Tributes</div>
                <Transfer
                    className="transfer-tribute"
                    dataSource={tributeSourceData}
                    targetKeys={tributeTargetKeys}
                    selectedKeys={tributeSelectedKeys}
                    onChange={onTributeTransferChange}
                    onSelectChange={onTributeTransferSelectChange}
                    render={(item) => item.name}
                />
            </div>
            <div>Events</div>
        </div>
    );
};

export default styled(GameDetail)`
    margin: 0 auto;

    .container__transfer-tribute {
        margin: 3rem 0;
    }

    .transfer-tribute {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        align-items: center;
    }
`;
