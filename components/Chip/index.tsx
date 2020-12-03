import { ChipStyle } from './styles'
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'

function Chip ({avatar}) {
    return (
        <ChipStyle>
            <code className='code'>{avatar}</code>
        </ChipStyle>
    )
}

export default Chip