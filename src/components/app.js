import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { showAirplanes } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.renderAirplaneList = this.renderAirplaneList.bind(this);
  }

  componentWillMount() {
    this.props.showAirplanes();
  }

  renderAirplaneList() {
    if (!this.props.airplanes.length) {
      return null;
    }

    const arr = this.props.airplanes || [];

    return arr.map((airplane) => {
      return (
        <tr key={airplane.id}>
          <td>{airplane.ID}</td>
          <td>{airplane.term}</td>
          <td>{airplane.actual}</td>
          <td>{airplane['airportToID.city_en']}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Terminal</th>
              <th>Time</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.renderAirplaneList()}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    airplanes: state.airplane.list,
  };
}

export default connect(mapStateToProps, { showAirplanes })(App);
