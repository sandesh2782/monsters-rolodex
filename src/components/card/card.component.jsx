import React, { Component } from "react";
import { CardDetails } from "../card-details/card-details.component";
import "./card.styles.css";
export class Card extends Component {
  state = {
    clickedMonster: null,
    monsterClicked: false,
    showMonster: false
  };

  toggleMonster = () => {
    this.setState({
      monsterClicked: false,
      showMonster: !this.state.showMonster
    });
  };

  handleClick = e => {
    const monster = JSON.parse(e.target.getAttribute("data-id"));
    this.setState({
      monsterClicked: true,
      clickedMonster: monster
    });
  };

  render() {
    const monsterData = this.props.monster;
    return (
      <div className="card-container">
        <img
          alt="monster"
          src={`https://robohash.org/${monsterData.id}?set=set2&size=180x180`}
          data-id={JSON.stringify(monsterData)}
          onClick={this.handleClick}
        />
        <h2 key={monsterData.id}>{monsterData.name}</h2>
        <p>{monsterData.email}</p>
        <CardDetails
          show={this.state.monsterClicked}
          onClose={this.toggleMonster}
        >
          <p>
            Address:
            {this.state.clickedMonster
              ? " " + JSON.stringify(this.state.clickedMonster.address)
              : null}
          </p>
          <p>
            Company:
            {this.state.clickedMonster
              ? " " + JSON.stringify(this.state.clickedMonster.company)
              : null}
          </p>
          <p>
            Phone:
            {this.state.clickedMonster
              ? " " + this.state.clickedMonster.phone
              : null}
          </p>
          <p>
            Website:
            {this.state.clickedMonster
              ? " " + this.state.clickedMonster.website
              : null}
          </p>
        </CardDetails>
      </div>
    );
  }
}
