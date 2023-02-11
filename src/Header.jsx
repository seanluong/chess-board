import './Header.scss'

import GitHubIcon from '@mui/icons-material/GitHub';
import { Switch } from '@mui/material';
import { BLACK, usePieceColorContext } from './PieceColorContext';

export const Header = () => {
    const { pieceColor, togglePieceColor } = usePieceColorContext();
    
    return (
        <header>
            <a href={"https://github.com/seanluong/chess-board"} target={"_blank"}>
                <GitHubIcon />Source
            </a>
            <div className='piece-color-switch'>
                <div>Switch Side</div>
                <Switch checked={pieceColor === BLACK} onChange={togglePieceColor} />
            </div>
        </header>
    );
}