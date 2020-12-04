import { ChipStyle } from './styles'
import { WiAlien } from 'react-icons/wi'
import { FaUserCheck, FaUserSlash, FaMale, FaFemale } from 'react-icons/fa'

function Chip ({avatar}) {

const validationAvatar = (avatar) => {
    switch(avatar) {
        case 'Alien' :
        return (<><WiAlien size={16} /><span>{avatar}</span></>)
        case 'Human' :
        return (<><FaUserCheck size={16} /><span>{avatar}</span></>)
        default :
        return (<><FaUserSlash size={16} /><span>{avatar}</span></>)
    }
}

const validationGender = (avatar) => {
    switch(avatar) {
        case 'Male' :
        return (<><FaMale size={16} /><span>{avatar}</span></>)
        case 'Female' :
        return (<><FaFemale size={16} /><span>{avatar}</span></>)
        default :
        return (<><span>{avatar}</span></>)
    }
}

    return (
        <ChipStyle>
             <code className='code'>{validationAvatar(avatar.species)}</code>
            <code className='code'>{validationGender(avatar.gender)}</code>
        </ChipStyle>
    )
}

export default Chip