import axios from "axios";
import { Link } from "react-router-dom";

const TributeOverview = ({ tribute, setTributes }) => {
    const handleDelete = (id) => {
        axios({
            method: "delete",
            url: `http://localhost:3333/api/tribute/${id}`,
        })
            .then(() => {
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
            })
            .catch((response) => {
                console.log("Error! Could not delete tribute!");
                console.log(response);
            });
    };

    return (
        <div>
            <div>
                {tribute.name} {tribute.str} {tribute.dex} {tribute.con}{" "}
                {tribute.int} {tribute.wis} {tribute.cha}
            </div>
            <div>
                <button
                    onClick={() => {
                        handleDelete(tribute._id);
                    }}
                >
                    DELETE
                </button>{" "}
                <Link to={`/tributes/${tribute._id}`}>
                    <button>EDIT</button>
                </Link>
            </div>
        </div>
    );
};

export default TributeOverview;
