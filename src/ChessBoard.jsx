import { Board } from './Board';
import { Paper } from "@mui/material";
import { usePieceColorContext, WHITE } from './PieceColorContext';
import { ColNames, RowNames } from './RowColNames';

const WHITE_BOARD = [
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['', '',  '',  '',  '',  '',  '',  ''],
    ['', '',  '',  '',  '',  '',  '',  ''],
    ['', '',  '',  '',  '',  '',  '',  ''],
    ['', '',  '',  '',  '',  '',  '',  ''],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
]

const BLACK_BOARD = [
    ['♜', '♞', '♝', '♚', '♛', '♝', '♞', '♜'],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ['', '',  '',  '',  '',  '',  '',  ''],
    ['', '',  '',  '',  '',  '',  '',  ''],
    ['', '',  '',  '',  '',  '',  '',  ''],
    ['', '',  '',  '',  '',  '',  '',  ''],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['♖', '♘', '♗', '♔', '♕', '♗', '♘', '♖'],
]


export const ChessBoard = () => {
    const { pieceColor } = usePieceColorContext();

    return (
        <Paper sx={{
            display: "grid",
            gridTemplate: "repeat(10, min(9vw, 9vh)) / repeat(10, min(9vw, 9vh))",
            bgcolor: "rgba(0, 0, 0, 0.2)",
            border: "none",
        }} variant="outlined">
            <ColNames side="top" />

            <RowNames side="left" />
            <Board board={pieceColor === WHITE ? WHITE_BOARD : BLACK_BOARD} />
            <RowNames side="right" />

            <ColNames side="bottom" />
        </Paper>
    );
}