import React, { Component } from "react";
import "./card-details.styles.css";

export class CardDetails extends Component {
  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop">
        <div className="modal">
          {this.props.children}
          <div className="footer">
            <button onClick={this.props.onClose}>Hide</button>
          </div>
        </div>
      </div>
    );
  }
}
