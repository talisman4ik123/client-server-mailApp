import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';

function UserAvatar() {
    return (
        <Stack direction="row" spacing={2} className='cursor-pointer hover:opacity-80 transition-opacity duration-300'>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>D</Avatar>
        </Stack>
    )
}

export default UserAvatar