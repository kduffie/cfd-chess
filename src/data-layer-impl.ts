import { ChessGameState, ChessMove, DataLayer } from "./data-layer";

export class DataLayerInMemory implements DataLayer {
  private state: ChessGameState = {
    moves: []
  };

  getState(): ChessGameState {
    return this.state;
  }
  restart(): void {
    this.state.moves = [];
  }
  move(move: ChessMove): void {
    this.state.moves.push(move);
  }
}
