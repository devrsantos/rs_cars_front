const loadCars = async () => {
    const carsResponse = fetch('http://localhost:5000/listar_todos')

    const [cars] = await Promise.all([carsResponse]);

    const carsJson = await cars.json();
    
    return carsJson;
}

export {loadCars}