/**
 * Created by chris.held on 10/10/16.
 */

const express = require('express');
const app = express();
const moment = require('moment');

//controllers
const ApplicationController = require('./controllers/application-controller');


app.listen(3333, () => {
  console.log('listening on 3000');
  const uptimeStart = moment(new Date());
  app.get('/', (req, res) => {
    const pjson = require('./package.json');
    const now = moment(new Date());
    var uptime = moment.duration(now.diff(uptimeStart));
    var data = {
      uptimePretty: uptime.humanize(),
      uptime: uptime.asSeconds(),
      name: "Loghub API",
      version: pjson.version
    };
    res.send(data);
  });

  //application routes
  app.get('/applications', ApplicationController.find);
  app.get('/applications/:id', ApplicationController.get);
  app.post('/applications/:id', ApplicationController.update);
  app.post('/applications', ApplicationController.create);
  app.delete('/applications/:id', ApplicationController.delete);

  //user routes

  //request routes

  //hook routes

});