import { DropStyle } from './styles'

function Dropdown({labels, label}) {
    return (
        <DropStyle>
            <button>{label}</button>
            <div className="Dropdown-panel">
                <ul>
                    <li>Origem: {labels.origin.name}</li>
                    <li>Local: {labels.location.name}</li>
                </ul>
            </div>
        </DropStyle>
    )
}

export default Dropdown