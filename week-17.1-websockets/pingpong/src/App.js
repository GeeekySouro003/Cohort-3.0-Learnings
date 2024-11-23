"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./App.css");
const ws_1 = require("ws");
function App() {
    function sendMessage() {
    }
    (0, react_1.useEffect)(() => {
        const ws = new ws_1.WebSocket("ws://localhost:8080");
        ws.onmessage = (e) => {
            alert(e.data);
        };
    }, []);
    return (<div>
      <input type="text " placeholder="Message here"></input>
      <button onClick={sendMessage}>Send</button>
    </div>);
}
exports.default = App;
