const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
rl.on('line', (input) => {
    if (input.indexOf('joined the game') > -1) {
        console.log("input received: " + input);
        let playerName = require('./src/message-parser.js').parsePlayerJoined(input).player;
        require('./src/discord-client.js').notifyPlayerHasJoined(playerName);
    }

    if (input.indexOf('left the game') > -1) {
        console.log("input received: " + input);
        let playerName = require('./src/message-parser.js').parsePlayerLeft(input).player;
        require('./src/discord-client.js').notifyPlayerHasLeft(playerName);
    }
})