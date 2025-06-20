import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Tooltip from '@mui/material/Tooltip';

function TopMenu() {
    return (
        <nav className='border-b border-gray-300 w-full text-center pb-2 pt-2'>
            <Button variant="contained" color="secondary" sx={{letterSpacing: "2px", textTransform: "none", marginRight: "10px"}}>New Message</Button>

            <Tooltip title="delete selected" sx={{marginRight: "10px"}}>
                <IconButton aria-label="delete" size="large">
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </Tooltip>

            <Tooltip title="selected all" sx={{marginRight: "10px"}}>
                <IconButton aria-label="selectAll" size="large">
                    <DoneAllIcon fontSize="inherit" />
                </IconButton>
            </Tooltip>

            <Tooltip title="unselected all" sx={{marginRight: "10px"}}>
                <IconButton aria-label="unSelectAll" size="large">
                    <RemoveDoneIcon fontSize="inherit" />
                </IconButton>
            </Tooltip>

            <Tooltip title="mark as important">
                <IconButton aria-label="important" size="large">
                    <StarBorderIcon fontSize="inherit" />
                </IconButton>
            </Tooltip>
        </nav>
    )
}

export default TopMenu