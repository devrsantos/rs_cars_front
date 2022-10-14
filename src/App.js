import { Component } from 'react';
import './App.css';
import { CarsCard } from './Components/CarCard';
import { loadCars } from "./utils/load-cars"

class App extends Component {

  state = {
    database: []
  }

  async componentDidMount() {
    await this.loadCars()
  }

  loadCars = async () => {
    const cars = await loadCars();
    this.setState({
      database: cars
    })
  }

  render() {
    const { database } = this.state;

    return (
      <div className="cars">
        {database.map(data => (
          <CarsCard key={data.id_veiculo} data={data} />
        ))}
      </div>
    );
  }
}

export default App;
