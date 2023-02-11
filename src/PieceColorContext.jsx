import { createContext, useContext, useState } from 'react';

export const WHITE = "white";
export const BLACK = "black";

const PieceColorContext = createContext(undefined);

export const PieceColorProvider = ({ children }) => {
    const [pieceColor, setPieceColor] = useState(WHITE);

    const togglePieceColor = () => setPieceColor(pieceColor === WHITE ? BLACK : WHITE);

    return (
        <PieceColorContext.Provider value={{
                pieceColor,
                togglePieceColor,
            }}
            >
            {children}
        </PieceColorContext.Provider>
    );
};

export const usePieceColorContext = () => useContext(PieceColorContext);