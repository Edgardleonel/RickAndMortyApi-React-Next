import { DropStyle } from './styles'
import { useRouter } from 'next/router'

function Dropdown({labels, label}) {
    const router = useRouter()

    return (
        <DropStyle>
            <button>{label}</button>
            <div className="Dropdown-panel">
                <ul>
                    <li onClick={() => router.push(`../detail/${labels.id}`)}>Sobre</li>
                    <li onClick={() => router.push(`../location/${labels.location.name}`)}>Localização</li>
                </ul>
            </div>
        </DropStyle>
    )
}

export default Dropdown