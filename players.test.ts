import { Player, TeamPlayer } from "./players";

describe("Player", () => {
    test("constructor sets name & jersey", () => {
        let player: Player = new Player("Joe", 22);
        expect(player.name).toBe("Joe");
        expect(player.jersey).toBe(22);
    });
    test("describe method", () => {
        let player: Player = new Player("Dean", 66);
        let result: string = player.describe();
        expect(result).toBe("Dean wears 66");
    });
});

describe("TeamPlayer", () => {
    test("constructor sets name, jersey, & team", () => {
        let teamPlayer: TeamPlayer = new TeamPlayer("Kayla", 42, "Wolves")
        expect(teamPlayer.name).toBe("Kayla");
        expect(teamPlayer.jersey).toBe(42);
        expect(teamPlayer.team).toBe("Wolves")
    });
    test("describe method", () => {
        let teamPlayer: TeamPlayer = new TeamPlayer("Emma", 43, "Doves");
        let result: string = teamPlayer.describe();
        expect(result).toBe("Emma wears 43 and plays for the Doves");
    });
});