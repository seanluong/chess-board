import "./RowColNames.scss";

export const RowNames = ({gridArea, direction}) => {
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

export const ColNames = ({ gridArea, direction }) => {
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