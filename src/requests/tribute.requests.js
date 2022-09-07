import axios from "axios";

const BASE_URL = "http://localhost:3333/api/tribute";

export const getTributes = (resolve, reject) => {
    axios({
        method: "get",
        url: `${BASE_URL}`,
    })
        .then((response) => {
            resolve(response);
        })
        .catch((response) => {
            reject(response);
        });
};
