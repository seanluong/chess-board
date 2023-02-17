import GitHubIcon from '@mui/icons-material/GitHub';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { WHITE, usePieceColorContext } from './PieceColorContext';
import { Box } from '@mui/system';

export const Header = () => {
    const { pieceColor, togglePieceColor } = usePieceColorContext();
    const gitHubUrl = "https://github.com/seanluong/chess-board";

    return (
        <>
            <AppBar position='static'>
                <Toolbar sx={{
                    bgcolor: "rgb(5, 5, 29)",
                    justifyContent: "space-between",
                }}>
                    <Button variant="contained" href={gitHubUrl}
                        startIcon={<GitHubIcon />} target={"_blank"} rel="noreferrer noopener">
                        <Typography variant="span" sx={{ display: { xs: 'none', sm: 'block' } }}>
                            Source
                        </Typography>
                    </Button>
                    <Box component={"div"}>
                        <Typography variant="h4">
                            {pieceColor === WHITE ? '♟' : '♙'}
                        </Typography>
                    </Box>
                    <Button variant="contained" onClick={togglePieceColor}
                        startIcon={<SwapVertIcon />}>
                        <Typography variant="span" sx={{ display: { xs: 'none', sm: 'block' } }}>
                            Switch Side
                        </Typography>
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    );
}