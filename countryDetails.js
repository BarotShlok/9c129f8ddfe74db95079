/*This component for show Country Weather data */

import React, { Component } from "react";
import { InputLabel, Button } from "@material-ui/core";
import api from "../services/api";

class countryDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: "",
      weather_icons: "",
      wind_speed: "",
      precip: "",
      showData: false,
    };
  }

  /// handleGetWeather data
  handleGetWeatherData() {
    api
      .getWeatherData()
      .then((response) => {
        var data = response.data;
        if (data.length > 0) {
          this.setState({
            temperature: data.current.temperature,
            weather_icons: data.weather_icons[0],
            wind_speed: data.current.wind_speed,
            precip: data.current.precip,
            showData: true,
          });
        } else {
          this.setState({
            temperature: "",
            weather_icons: "",
            wind_speed: "",
            precip: "",
            showData: true,
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }
  render() {
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleGetWeatherData.bind(this)}
          className="countryDtls"
        >
          Capital Weather
        </Button>
        {this.state.showData && (
          <div className="countty_lbl">
            <InputLabel>
              <b>Temperature :-</b> <p>{this.state.temperature}</p>
            </InputLabel>
            <InputLabel>
              <b>Weather_icons :-</b>
              <p>
                <img
                  src={this.state.weather_icons}
                  alt="weather_icons"
                  className="imageFlag"
                />
              </p>
            </InputLabel>
            <InputLabel>
              <b>Wind_speed :-</b> <p>{this.state.wind_speed}</p>
            </InputLabel>
            <InputLabel>
              <b>Precip :-</b> <p>{this.state.precip}</p>
            </InputLabel>
          </div>
        )}
      </div>
    );
  }
}

export default countryDetails;
