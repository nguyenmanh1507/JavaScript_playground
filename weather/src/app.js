import Weather from './weather';
import ui from './ui';

let weatherList = new Weather('list');

weatherList.findAll()
  .then(ui.render)
  .catch(erorr => {
    console.log(error);
  })
;
