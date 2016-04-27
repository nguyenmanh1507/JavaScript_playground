'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require('./api');

var API = {
  fetch: function fetch(path) {
    return new Promise(function (resolve, reject) {
      var uri = _api.BASE_URI + '/' + path,
          request = new XMLHttpRequest();

      request.open('GET', uri, true);

      request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
          resolve(JSON.parse(request.response));
        }
      };

      request.onerror = function () {
        reject(new Error('Something went wrong on the API'));
      };

      request.send();
    });
  }
};

exports.default = API;
'use strict';

var _weather = require('./weather');

var _weather2 = _interopRequireDefault(_weather);

var _ui = require('./ui');

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var weatherList = new _weather2.default('list');

weatherList.findAll().then(_ui2.default.render).catch(function (erorr) {
  console.log(error);
});
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var BASE_URI = 'http://localhost:3000';

exports.BASE_URI = BASE_URI;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Weather = function () {
  function Weather(path) {
    _classCallCheck(this, Weather);

    this.path = path;
  }

  _createClass(Weather, [{
    key: 'findAll',
    value: function findAll() {
      return _api2.default.fetch(this.path);
    }
  }]);

  return Weather;
}();

exports.default = Weather;
//# sourceMappingURL=all.js.map
