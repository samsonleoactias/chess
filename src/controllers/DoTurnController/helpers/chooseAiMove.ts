import {
  OneTimeOnlyMoveFlags,
  PieceLocations,
  PossibleMove,
  PossibleMovesAssignedToPieces,
} from "../../../types/index.js";

const chooseAiMove = (
  pieceLocations: PieceLocations,
  oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags,
  possibleMovesAssignedToPieces: PossibleMovesAssignedToPieces
): { piece: string; move: PossibleMove } => {
  var pieceNames = [
    "pawnA",
    "pawnB",
    "pawnC",
    "pawnD",
    "pawnE",
    "pawnF",
    "pawnG",
    "pawnH",
    "rookA",
    "rookB",
    "knightA",
    "knightB",
    "bishopA",
    "bishopB",
    "queen",
    "king",
  ];

  var pickedPiece = pieceNames[Math.floor(Math.random() * pieceNames.length)];

  if ((<any>possibleMovesAssignedToPieces)[pickedPiece].length === 0) {
    chooseAiMove(
      pieceLocations,
      oneTimeOnlyMoveFlags,
      possibleMovesAssignedToPieces
    );
  }

  var pickedMove: PossibleMove = (<any>possibleMovesAssignedToPieces)[
    pickedPiece
  ][
    Math.floor(
      Math.random() * (<any>possibleMovesAssignedToPieces)[pickedPiece].length
    )
  ];

  return { piece: pickedPiece, move: pickedMove };
};

export default chooseAiMove;
