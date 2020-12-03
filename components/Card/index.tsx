import { CardStyle } from './styles'

function Card ({info}) {
    return (
        <CardStyle>
            <img src={info.image} />
            <h3>{info.name}</h3>
            <p><span>{info.status}</span> - {info.gender}</p>
        </CardStyle>
    )
}

export default Card