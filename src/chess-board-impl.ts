import { ChessPiece } from "./business-logic-layer";
import { ChessBoard } from "./chess-board";
import { BoardLocation } from "./data-layer";

export class ChessBoardImpl implements ChessBoard {

  // TODO: implement!
  
  getPieceAt(location: BoardLocation): ChessPiece {
    throw new Error("Method not implemented.");
  }
  setPieceAt(location: BoardLocation, piece: ChessPiece): void {
    throw new Error("Method not implemented.");
  }

}