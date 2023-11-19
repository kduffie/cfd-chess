import { ChessBusinessLogicLayer } from "./business-logic-layer";
import { ChessBoard } from "./chess-board";
import { ChessBoardImpl } from "./chess-board-impl";
import { ChessMove, Color, DataLayer } from "./data-layer";

export class ChessBusinessLogicLayerImpl implements ChessBusinessLogicLayer {
  private board: ChessBoard;
  private turn: Color;
  private dataLayer: DataLayer;

  constructor(dataLayer: DataLayer) {
    this.dataLayer = dataLayer;
    this.initializeBoard();
    for (const move of this.dataLayer.getState().moves) {
      this.makeMove(move);
    }
  }

  private initializeBoard(): void {
    this.board = new ChessBoardImpl();
    for (let i = 0; i < 7; i++) {
      this.board.setPieceAt({ row: 1, column: i }, { color: 'white', type: 'pawn' });
      this.board.setPieceAt({ row: 6, column: i }, { color: 'black', type: 'pawn' });
    }
    // TODO: add other pieces
  }

  getBoard(): ChessBoard {
    return this.board;
  }

  getWhoseTurn(): Color {
    return this.turn
  }

  move(move: ChessMove): void {
    // TOOD: validate the move
    this.makeMove(move);
    this.dataLayer.move(move);
  }

  private makeMove(move: ChessMove): void {
    if (move.type === 'move') {
      this.board.setPieceAt(move.to, this.board.getPieceAt(move.from));
      this.board.setPieceAt(move.from, null);
    }
  }
}