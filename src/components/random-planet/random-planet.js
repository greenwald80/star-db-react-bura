import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();
  state = {
    planet: {},
    loading: true,
  };
  constructor() {
    super();
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.updatePlanet();
    // }, 1500);
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  //чтобы был this
  //заменяю updatePlanet(){} на {updatePlanet=()=> {}
  updatePlanet = () => {
    //получаю айди до 27
    const id = Math.floor(Math.random() * 25) + 3;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false, error: false });
  };

  onError = (err) => {
    this.setState({ error: true, loading: false });
  };

  render() {
    const { planet, loading, error } = this.state;

    //если загружаемся, то это объект спиннер, если нет, то null
    const spinner = loading ? <Spinner /> : null;

    //отображает блок ошибки при ошибке
    const errorMessage = error ? <ErrorIndicator /> : null;

    //есть данные только нет лоадинга или ошибки
    const hasData = !(loading || error);

    //после окончания загрузки будет отображаться content
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
