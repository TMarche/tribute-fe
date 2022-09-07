import axios from "axios";
import { Link } from "react-router-dom";

const TributeOverview = ({ game, setGames }) => {
    const handleDelete = (id) => {
        axios({
            method: "delete",
            url: `http://localhost:3333/api/game/${id}`,
        })
            .then(() => {
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
            })
            .catch((response) => {
                console.log("Error! Could not delete game!");
                console.log(response);
            });
    };

    return (
        <div>
            <div>{game.name}</div>
            <div>
                <button
                    onClick={() => {
                        handleDelete(game._id);
                    }}
                >
                    DELETE
                </button>{" "}
                <Link to={`/games/${game._id}`}>
                    <button>EDIT</button>
                </Link>
            </div>
        </div>
    );
};

export default TributeOverview;
