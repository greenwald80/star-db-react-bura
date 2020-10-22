import React, { Component } from "react";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator/error-indicator";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import "./people-page.css";

export default class PeoplePage extends Component {
  state = {
    selectedPerson: 3,
    hasError: false,
  };

  componentDidCatch(error, info) {
    //debugger;
    this.setState({
      hasError: true,
    });
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onPersonSelected} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}
