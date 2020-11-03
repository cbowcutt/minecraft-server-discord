test('onPlayerJoinedTheGame', () => {
    let input = '[00:37:46] [Server thread/INFO]: mattjgray[/67.160.190.68:60769] logged in with entity id 196355 at (-365, 68.0, -22.5)'
    let output = require('../src/message-parser.js').parsePlayerJoinedTheGame(input)
    expect(output.player).toBe('mattjgray');
    expect(output.id).toBe('196355');
    expect(output.spawnCoordinates.x).toBe(-365.0);
    expect(output.spawnCoordinates.y).toBe(68.0);
    expect(output.spawnCoordinates.z).toBe(-22.5);
})

test('parsePlayerJoined', () => {
    let input = '[00:37:46] [Server thread/INFO]: mattjgray joined the game'
    let output = require('../src/message-parser.js').parsePlayerJoined(input)
    expect(output.player).toBe('mattjgray');
})

test('sendDiscordMessage', () => {
    let config = require('../discord.config.json');
    require('../src/discord-client').channel(config.channel_id).message("sup");
})