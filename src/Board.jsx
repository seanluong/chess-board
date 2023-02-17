import { Paper, Stack } from '@mui/material';

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

const Row = ({row, rowIdx}) => {
    const darkCellBackgroundColor = "rgba(82, 103, 8, 0.9)";
    const lightCellBackgroundColor = "rgba(230, 233, 220, 0.9)";
    const cellSize = "min(7vw, 7vh)";
    return (
        <Stack direction="row" sx={{
            display: "flex",
            flex: `1 1 ${cellSize}`,
        }}>
            {
                row.map((piece, colIdx) => {
                    const isLight = isLightCell(rowIdx, colIdx);
                    return (
                        <Paper key={cellKey(rowIdx, colIdx)} sx={{
                            flex: "1 1 min(9vw, 9vh)",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            bgcolor: isLight ? lightCellBackgroundColor : darkCellBackgroundColor,
                            borderRadius: 0,
                            fontSize: cellSize,
                        }} elevation={0}>
                            {piece}
                        </Paper>
                    );
                })
            }
        </Stack>
    );
}

export const Board = ({board}) => {
    return (
        <Paper sx={{
            display: "flex",
            flexDirection: "column-reverse",
            gridArea: "2 / 2 / span 8 / span 8",
        }} elevation={4}>
            {
                board.map((row, rowIdx) => {
                    return  (
                        <Row key={rowKey(rowIdx)} row={row} rowIdx={rowIdx} />
                    );
                })
            }
        </Paper>
    )
}