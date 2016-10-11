/**
 * Created by chris.held on 10/10/16.
 */

const express = require('express');
const app = express();
const moment = require('moment');


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
});