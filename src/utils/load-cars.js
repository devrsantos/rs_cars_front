import { database } from "../dataBase";

const loadCars = async () => {
    const carsResponse = fetch('http://localhost:5000/listar_todos')
    try {
        const [cars] = await Promise.all([carsResponse]);

        const carsJson = await cars.json();
        
        return carsJson;    
    } catch (e) {
        console.log({"Mensagem": "Estou retornando do arquivo database.js"});
        return database;
    }
    
}

export {loadCars}