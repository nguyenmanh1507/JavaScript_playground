import API from './api';

class Weather {
  constructor(path) {
    this.path = path;
  }

  findAll() {
    return API.fetch(this.path);
  }
}

export default Weather;
