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

        this.setState({
          temperature: data.current.temperature,
          weather_icons: data.current.weather_icons[0],
          wind_speed: data.current.wind_speed,
          precip: data.current.precip,
          showData: true,
        });
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
              <b>Temperature :-</b>  {this.state.temperature} 
            </InputLabel>
            <InputLabel>
              <b>Weather_icons :-</b>
              <p>
                <img
                  src={this.state.weather_icons}
                  alt="weather_icons"
                  className="imageweather"
                />
              </p>
            </InputLabel>
            <InputLabel>
              <b>Wind_speed :-</b>  {this.state.wind_speed}  
            </InputLabel>
            <InputLabel>
              <b>Precip :-</b>  {this.state.precip} 
            </InputLabel>
          </div>
        )}
      </div>
    );
  }
}

export default countryDetails;
