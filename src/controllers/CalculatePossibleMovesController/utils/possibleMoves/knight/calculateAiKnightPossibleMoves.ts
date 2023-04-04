import {
  OneTimeOnlyMoveFlags,
  Piece,
  PieceLocations,
  PossibleMove,
} from "../../../../../types";
import checkIfSquareIsOccupiedByAiPiece from "../helpers/checkIfSquareIsOccupiedByAiPiece";
import determineIfAnyPossibleMovesCreateCheckOnAi from "../helpers/determineIfAnyPossibleMovesCreateCheckOnAi";

const calculateAiKnightPossibleMoves = (
  row: number,
  column: number,
  pieceLocations: PieceLocations,
  piece: Piece,
  oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags,
  checkForCheck: boolean
) => {
  const possibleMoves: PossibleMove[] = [];

  if (row + 2 <= 7 && column + 1 <= 7)
    if (!checkIfSquareIsOccupiedByAiPiece(pieceLocations, row + 2, column + 1))
      possibleMoves.push({ location: { row: row + 2, column: column + 1 } });

  if (row + 2 <= 7 && column - 1 >= 0)
    if (!checkIfSquareIsOccupiedByAiPiece(pieceLocations, row + 2, column - 1))
      possibleMoves.push({ location: { row: row + 2, column: column - 1 } });

  if (row - 2 >= 0 && column + 1 <= 7)
    if (!checkIfSquareIsOccupiedByAiPiece(pieceLocations, row - 2, column + 1))
      possibleMoves.push({ location: { row: row - 2, column: column + 1 } });

  if (row - 2 >= 0 && column - 1 >= 0)
    if (!checkIfSquareIsOccupiedByAiPiece(pieceLocations, row - 2, column - 1))
      possibleMoves.push({ location: { row: row - 2, column: column - 1 } });

  if (row + 1 <= 7 && column + 2 <= 7)
    if (!checkIfSquareIsOccupiedByAiPiece(pieceLocations, row + 1, column + 2))
      possibleMoves.push({ location: { row: row + 1, column: column + 2 } });

  if (row + 1 <= 7 && column - 2 >= 0)
    if (!checkIfSquareIsOccupiedByAiPiece(pieceLocations, row + 1, column - 2))
      possibleMoves.push({ location: { row: row + 1, column: column - 2 } });

  if (row - 1 >= 0 && column + 2 <= 7)
    if (!checkIfSquareIsOccupiedByAiPiece(pieceLocations, row - 1, column + 2))
      possibleMoves.push({ location: { row: row - 1, column: column + 2 } });

  if (row - 1 >= 0 && column - 2 >= 0)
    if (!checkIfSquareIsOccupiedByAiPiece(pieceLocations, row - 1, column - 2))
      possibleMoves.push({ location: { row: row - 1, column: column - 2 } });

  if (checkForCheck) {
    let possibleMovesCheckedForCheckOnAi: PossibleMove[] = [];

    possibleMoves.forEach((possibleMove) => {
      if (
        !determineIfAnyPossibleMovesCreateCheckOnAi(
          pieceLocations,
          piece,
          possibleMove,
          oneTimeOnlyMoveFlags
        )
      ) {
        possibleMovesCheckedForCheckOnAi.push(possibleMove);
      }
    });

    return possibleMovesCheckedForCheckOnAi;
  }

  return possibleMoves;
};

export default calculateAiKnightPossibleMoves;
