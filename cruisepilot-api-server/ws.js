// var WebSocketServer = require('ws').Server,
//   wss = new WebSocketServer({port: 40510})

// wss.on('connection', function (ws) {
//   ws.on('message', function (message) {
//     console.log('received: %s', message)
//   })

//   setInterval(
//     () => ws.send(`${new Date()}`),
//     1000
//   )
// })

const ws = new WebSocket('ws://192.168.145.112/wsDrive');

