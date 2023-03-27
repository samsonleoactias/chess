import { PieceLocations } from "../../../../../types";
import findWhatPieceIsOnASquare from "../../../../helpers/findWhatPieceIsOnASquare";
import isAiPiece from "./isAiPiece";

const checkIfSquareIsOccupiedByAiPiece = (
  pieceLocations: PieceLocations,
  row: number,
  column: number
) => {
  return isAiPiece(findWhatPieceIsOnASquare(pieceLocations, row, column));
};

export default checkIfSquareIsOccupiedByAiPiece;
