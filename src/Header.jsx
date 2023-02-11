import './Header.scss'

import GitHubIcon from '@mui/icons-material/GitHub';

export const Header = () => {
    return (
        <header>
            <a href={"https://github.com/seanluong/chess-board"} target={"_blank"}>
                <GitHubIcon />Source
            </a>
        </header>
    );
}