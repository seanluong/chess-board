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
            <ColNames gridArea="1 / 2 / span 1 / span 8" direction="top" />

            <RowNames gridArea="2 / 1 / span 8 / span 1" direction="left" />
            <Board board={pieceColor === WHITE ? WHITE_BOARD : BLACK_BOARD} />
            <RowNames gridArea="2 / 10 / span 8 / span 1" direction="right" />

            <ColNames gridArea="10 / 2 / span 1 / span 8" direction="bottom" />
        </div>
    );
}