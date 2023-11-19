import { ChessPiece } from "./business-logic-layer";
import { BoardLocation } from "./data-layer";

export interface ChessBoard {
  getPieceAt(location: BoardLocation): ChessPiece;
  setPieceAt(location: BoardLocation, piece: ChessPiece | null): void;
}

