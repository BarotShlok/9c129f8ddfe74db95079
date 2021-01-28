import React, { Component } from "react";
import { InputLabel, Button, TextField, Typography } from "@material-ui/core";
import api from "../services/api";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countryName: "",
      capital: "",
      population: "",
      latlng: [],
      flag: "",
      showData: false,
    };
  }
  /// handle submit input data
  handleSubmitData() {
    api
      .handleGetCountryDataByName(this.state.countryName)
      .then((response) => {
        var data = response.data;
        if (data.length > 0) {
          this.setState({
            capital: data[1].capital,
            population: data[1].population,
            latlng: data[1].latlng,
            flag: data[1].flag,
            showData: true,
          });
        } else {
          this.setState({
            capital: "",
            population: "",
            latlng: "",
            flag: "",
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
      <div className="countryform">
        <Typography variant="h4">Country Details</Typography>
        <div className="inputText">
          <TextField
            label="Enter Country Name"
            variant="outlined"
            className=""
            value={this.state.countryName}
            onChange={(e) => this.setState({ countryName: e.target.value })}
          />
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            disabled={this.state.countryName.length > 0 ? false : true}
            className="submitBtn"
            onClick={this.handleSubmitData.bind(this)}
          >
            Submit
          </Button>
          <InputLabel className="orLbl">OR</InputLabel>
          <Link to="countryDetails" className="linkCnty">
            Country Details
          </Link>
        </div>
        {this.state.showData && (
          <div className="divmargin">
            <InputLabel>
              <b>Capital :</b> {this.state.capital}
            </InputLabel>
            <InputLabel>
              <b>Population : </b>
              {this.state.population}
            </InputLabel>
            <InputLabel>
              <b>Latitude : </b>
              {this.state.latlng[0]}
            </InputLabel>
            <InputLabel>
              <b>Longitude : </b>
              {this.state.latlng[1]}
            </InputLabel>
            <InputLabel>
              <b>Flag : </b>
              <img src={this.state.flag} alt="Flag" className="imageFlag" />
            </InputLabel>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
