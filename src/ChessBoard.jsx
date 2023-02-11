import { Board } from './Board';
import './ChessBoard.scss';
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
        <div className={`chess-board ${pieceColor}-piece`}>
            <ColNames direction="top" />

            <RowNames direction="left" />
            <Board board={pieceColor === WHITE ? WHITE_BOARD : BLACK_BOARD} />
            <RowNames direction="right" />

            <ColNames direction="bottom" />
        </div>
    );
}