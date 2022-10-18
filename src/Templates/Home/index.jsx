import { Component } from 'react';

import './styles.css';

import { CarsCard } from './../../Components/CarCard';
import { loadCars } from "./../../utils/load-cars"
import { Button } from '../../Components/Button';

class Home extends Component {

  state = {
    database: [],
    page: 0,
    carsPerPage: 2,
    allCars: []
  }

  async componentDidMount() {
    await this.loadCars()
  }

  loadCars = async () => {
    const { page, carsPerPage } = this.state;

    const cars = await loadCars();
    this.setState({
      database: cars.slice(page, carsPerPage),
      allCars: cars
    })
  }

  loadMoreCars = () => {
    const { page, carsPerPage, database, allCars } = this.state;

    const nextPage = page + carsPerPage;

    const nextCars = allCars.slice(nextPage, nextPage + carsPerPage);

    database.push(...nextCars)

    this.setState({
      database,
      page: nextPage
    })

  }

  render() {
    const { database, page, carsPerPage, allCars } = this.state;

    const noMoreCars = (page + carsPerPage) >= allCars.length;

    return (
      <>
        <div className="cars">
          {database.map(data => (
            <CarsCard key={data.id_veiculo} data={data} />
          ))}
        </div>
        <div className="container-button">
          <Button onClick={this.loadMoreCars} disabled={noMoreCars} text="Load More Cars" />
        </div>
      </>
    );
  }
}

export { Home };
