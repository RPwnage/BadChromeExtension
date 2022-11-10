const WebSocket = require("ws");
let port = 666;
const wss = new WebSocket.Server({ port: 666 });

function brainConsoleLog(text) {
    console.log("[BrainServer] " + text.toString());
}

wss.on("connection", (ws) => {
    brainConsoleLog("New Chrome Instance connected to Websocket.");
    ws.on("message", function incoming(message) {
        console.log("%s", message);
    });
});

brainConsoleLog(`WebSocket Server running on port ${port}`);
