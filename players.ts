export class Player {
    constructor(public name: string, public jersey: number) {
    }
    describe(): string {
        return `${this.name} wears ${this.jersey}`
    }
}

export class TeamPlayer extends Player {
    constructor(name: string, jersey: number, public team: string) {
        super(name, jersey);
    }
    describe(): string {
        return super.describe() + ` and plays for the ${this.team}`
    }
}