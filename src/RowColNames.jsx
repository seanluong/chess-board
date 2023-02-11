import { BLACK, usePieceColorContext } from "./PieceColorContext";
import "./RowColNames.scss";

export const RowNames = ({ direction }) => {
    const names = [1, 2, 3, 4, 5, 6, 7, 8];
    const { pieceColor } = usePieceColorContext();
    if (pieceColor === BLACK) {
        names.reverse();
    }
    return (
        <div className={`row-names ${direction}`}>
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

export const ColNames = ({ direction }) => {
    const names = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const { pieceColor } = usePieceColorContext();
    if (pieceColor === BLACK) {
        names.reverse();
    }
    return (
        <div className={`col-names ${direction}`}>
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