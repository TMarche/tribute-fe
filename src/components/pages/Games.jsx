import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import GameOverview from "../GameOverview";

const Games = ({ className }) => {
    const [games, setGames] = useState([]);
    const [name, setName] = useState("");

    useEffect(() => {
        // Fetch all games
        axios({
            method: "get",
            url: "http://localhost:3333/api/game",
        })
            .then((response) => {
                setGames(response.data.games);
            })
            .catch((response) => {
                console.log("Error! Could not get games!");
                console.log(response);
            });
    }, []);

    const handleAdd = () => {
        // Handle adding a single game
        if (name) {
            axios({
                method: "post",
                url: "http://localhost:3333/api/game",
                data: {
                    name,
                },
            })
                .then((response) => {
                    const { game } = response.data;
                    console.log("Success! Added game");
                    console.log(response.data);
                    setGames([...games, game]);
                    setName("");
                })
                .catch((response) => {
                    console.log("Error! Could not add game!");
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
            <div>GAMES</div>
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
                {games.map((game) => (
                    <GameOverview
                        key={game._id}
                        game={game}
                        setGames={setGames}
                    />
                ))}
            </div>
        </div>
    );
};

export default styled(Games)``;
