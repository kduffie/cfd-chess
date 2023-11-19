import { ChessBoard } from "./chess-board";
import { BoardLocation, ChessMove, Color } from "./data-layer";

export interface ChessBusinessLogicLayer {
  getBoard(): ChessBoard;
  getWhoseTurn(): Color;
  move(move:ChessMove): void;
}

export interface ChessPiece {
  color: Color;
  type: ChessPieceType;
}

export type ChessPieceType = 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king';

