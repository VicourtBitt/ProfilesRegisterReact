import axios from "axios"

// Somente um teste de API mockada, futuramente utilizaremos
// Sequelize com SQLite3 para armazenar os dados.
export const MockAPI = async () => {
    const response = await axios.get("./db.json");
    const { data } = response;
    console.log(data)
}