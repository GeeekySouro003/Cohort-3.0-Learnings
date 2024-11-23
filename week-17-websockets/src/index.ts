import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

//event handlers for WebSocketServer
wss.on('connection',function(socket){
    console.log("user connected");
    // setInterval(() => {
    //     socket.send('Current price of solana is' + Math.random())
    // },500)

// socket.on('message', (e) => {
// console.log(e.toString())
// })
    

socket.on("message", (e) => {
    if(e.toString() === 'ping') {
        socket.send('pong');
    }
})
})