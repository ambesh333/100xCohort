interface Game {
  id: string;
  whitePlayer: string;
  blackPlayer: string;
  moves: string[];
}

export class GameManager {
  private static instance: GameManager; // Create a static instance of the class
  private games: Game[] = [];

  private constructor() {
    // Private constructor ensures that a new instance cannot be created from outside
  }

  public static getInstance(): GameManager {
    if (!GameManager.instance) {
      GameManager.instance = new GameManager();
    }
    return GameManager.instance;
  }

  public logState() {
    console.log(GameManager.instance);
  }
  public addGame(game: Game) {
    this.games.push(game);
  }
}

// Usage GameManager.getInstance().addGame()
