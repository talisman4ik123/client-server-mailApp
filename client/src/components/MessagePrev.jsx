import Checkbox from '@mui/material/Checkbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const labelSelect = { inputProps: { 'aria-label': 'select checkbox' } };
const labelImportant = { inputProps: { 'aria-label': 'important checkbox' } };

function MessagePrev() {
    return (
        <li className='flex items-center cursor-pointer border-b border-gray-300 px-2 py-1'>
            <Checkbox {...labelSelect} color="default" />
            <Checkbox {...labelImportant} icon={<StarBorderIcon />} checkedIcon={<StarIcon />} color='default'/>
            <span className='font-bold ml-2 text-nowrap pr-8'>Dmitrii Zaitsau</span>
            <div className='flex text-nowrap'>
                <span className='font-bold'>Message subject</span>
                <span className='mx-2'>-</span>
                <span className='text-nowrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptas. Ducimus, odio?</span>
            </div>
            <span className='ml-auto font-bold'>21/08/25</span>
        </li>
    )
}

export default MessagePrev