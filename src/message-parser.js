module.exports = {
    parsePlayerJoinedTheGame(message) {
        let regexp = /(?<username>\w+)\[\/\d+\.\d+\.\d+\.\d+:\d+\] logged in with entity id (?<id>\d+) at \((.+), (.+), (.+)\)/mg
        let groups = regexp.exec(message);

        return { player: groups[1], id: groups[2],  spawnCoordinates: {x: Number.parseFloat(groups[3]), y: Number.parseFloat(groups[4]), z: Number.parseFloat(groups[5])} }
    },

    parsePlayerJoined(message) {
        let regexp = /(?<username>\w+) joined the game/mg
        let groups = regexp.exec(message)
        return { player: groups[1]};
    }
}