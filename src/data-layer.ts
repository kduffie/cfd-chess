export interface DataLayer {
  getState(): ChessGameState;
  restart(): void;
  move(move: ChessMove): void;
}

export interface ChessGameState {
  moves: ChessMove[];
}

export interface ChessMove {
  type: ChessMoveType;
  by: Color;
  from?: BoardLocation;
  to?: BoardLocation;
}

export type ChessMoveType = 'move' | 'give-up' | 'offer-draw' | 'accept-draw' | 'reject-draw';

export type Color = 'black' | 'white';

export interface BoardLocation {
  row: number;
  column: number;
}
