import axios from "axios";
import * as config from "../config/config";

/* this call for api call */
class api {
  /// get country data by name
  handleGetCountryDataByName(countryName) {
    return axios.get(`${config.COUNTRY_NAME_API}/${countryName}`);
  }
  /// get weather data
  getWeatherData() {
    return axios.get(
      `${config.WEATHER_API}?access_key=${config.WEATHER__ACCESS_KEY}&query = India`
    );
  }
}

export default new api();
