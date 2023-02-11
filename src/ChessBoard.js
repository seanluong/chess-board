import './ChessBoard.scss';

const rowKey = (rowIdx) => `${rowIdx + 1}`;

const colIdxToKey = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D',
    4: 'E',
    5: 'F',
    6: 'G',
    7: 'H',
};

const colKey = (colIdx) => colIdxToKey[colIdx];

const cellKey = (rowIdx, colIdx) => `${rowKey(rowIdx)}:${colKey(colIdx)}`;

const isLightCell = (rowIdx, colIdx) => (rowIdx + colIdx) % 2 === 1;

const cellSide = (rowIdx, colIdx) => {
    const classes = [];
    if (rowIdx === 0) {
        classes.push('bottom');
    } else if (rowIdx === 7) {
        classes.push('top');
    }

    if (colIdx === 0) {
        classes.push('left');
    } else if (colIdx === 7) {
        classes.push('right');
    }
    return classes.join(" ");
}

const Row = ({row, rowIdx}) => {
    return (
        <div className="row">
            {
                row.map((piece, colIdx) => {
                    const cellSideClass = cellSide(rowIdx, colIdx);
                    const cellColorClass = isLightCell(rowIdx, colIdx) ? 'light' : 'dark';
                    return (
                        <div key={cellKey(rowIdx, colIdx)} className={`cell ${cellSideClass} ${cellColorClass}`}>
                            {piece}
                        </div>
                    );
                })
            }
        </div>
    );
}

const Board = ({board}) => {
    return (
        <div className="board">
            {
                board.map((row, rowIdx) => {
                    return  (
                        <Row key={rowKey(rowIdx)} row={row} rowIdx={rowIdx} />
                    );
                })
            }
        </div>
    )
}

const RowNames = ({gridArea, direction}) => {
    const names = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <div className="row-names" style={{ gridArea }}>
            {
                names.map((name) => 
                    <div key={`${direction} ${name}`} className={`row-name ${direction}`}>
                        <strong>{name}</strong>
                    </div>
                )
            }
        </div>
    );
}

const ColNames = ({ gridArea, direction }) => {
    const names = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    return (
        <div className="col-names" style={{ gridArea }}>
            {
                names.map((name) => 
                    <div key={`${direction} ${name}`} className={`col-name ${direction}`}>
                        <strong>{name}</strong>
                    </div>
                )
            }
        </div>
    );
}

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