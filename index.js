const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
rl.on('line', (input) => {
    console.log('input received: hello');
    if (input.indexOf('joined the game') > -1) {
        let playerName = require('./src/message-parser.js').parsePlayerJoined(input).player;
        require('./src/discord-client.js').notifyPlayerHasJoined(playerName);
    }
})