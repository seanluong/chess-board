import { Board } from './Board';
import './ChessBoard.scss';
import { ColNames, RowNames } from './RowColNames';


export const ChessBoard = () => {
    const board = [
        ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
        ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
        ['', '',  '',  '',  '',  '',  '',  ''],
        ['', '',  '',  '',  '',  '',  '',  ''],
        ['', '',  '',  '',  '',  '',  '',  ''],
        ['', '',  '',  '',  '',  '',  '',  ''],
        ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
        ['♜', '♞', '♝', '♛','♚', '♝', '♞', '♜'],
    ]
    return (
        <div className="chess-board">
            <ColNames gridArea="1 / 2 / span 1 / span 8" direction="top" />

            <RowNames gridArea="2 / 1 / span 8 / span 1" direction="left" />
            <Board board={board} />
            <RowNames gridArea="2 / 10 / span 8 / span 1" direction="right" />

            <ColNames gridArea="10 / 2 / span 1 / span 8" direction="bottom" />
        </div>
    );
}