import { Stack, Paper } from "@mui/material";
import { BLACK, usePieceColorContext } from "./PieceColorContext";

export const RowNames = ({ side }) => {
    const names = [1, 2, 3, 4, 5, 6, 7, 8];
    const { pieceColor } = usePieceColorContext();
    if (pieceColor === BLACK) {
        names.reverse();
    }
    return (
        <Stack direction="column-reverse" sx={{
            gridArea: (side === "left" ? "2 / 1 / span 8 / span 1" : "2 / 10 / span 8 / span 1"),
        }}>
            {
                names.map((name) => 
                    <Paper key={`${side} ${name}`} elevation={0} sx={{
                        flex: "1 1 100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        bgcolor: "transparent",
                        border: "none",
                        textTransform: "uppercase",
                        fontSize: { xs: "1em", sm: "1.5em" }
                    }}>
                        <strong>{name}</strong>
                    </Paper>
                )
            }
        </Stack>
    );
}

export const ColNames = ({ side }) => {
    const names = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const { pieceColor } = usePieceColorContext();
    if (pieceColor === BLACK) {
        names.reverse();
    }
    return (
        <Stack direction="row" sx={{
            gridArea: (side === "top" ? "1 / 2 / span 1 / span 8" : "10 / 2 / span 1 / span 8"),
            alignItems: "center",
        }}>
            {
                names.map((name) => 
                    <Paper key={`${side} ${name}`} elevation={0} sx={{
                        flex: "1 1 100%",
                        textAlign: "center",
                        bgcolor: "transparent",
                        border: "none",
                        textTransform: "uppercase",
                        fontSize: { xs: "1em", sm: "1.5em" },

                    }}>
                        <strong>{name}</strong>
                    </Paper>
                )
            }
        </Stack>
    );
}