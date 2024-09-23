var express = require('express')
var WebSocket =  require('ws');

var app = express()

const ws = new WebSocket('ws://192.168.145.112:8887/wsDrive');


ws.on('open', function open() {
  console.log("connected to car");
});


app.get('/', function (req, res) {
    res.send("Sample response")
})

app.get('/drivetoferns', function (req, res) {
  setTimeout(function () {
    data = JSON.stringify({
      'drive_mode': "local"})
    
    // data = JSON.stringify({ 'angle': 0.8, //Steering(-1..+1)
    //     'throttle':0.7, //Accel(-1..+1)
    //     'drive_mode': "user"});
   
    ws.send(data);
    res.send("Driving to ferns")
  }, 2000)
  
})

app.get('/stop', function (req, res) {

  // data = JSON.stringify({
  //   'drive_mode': local})
  
  data = JSON.stringify({ 'angle': 0, //Steering(-1..+1)
      'throttle':0, //Accel(-1..+1)
      'drive_mode': "user"});
  res.send("Stopping the car")
  ws.send(data);
  
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
