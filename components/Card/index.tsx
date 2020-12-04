import { CardStyle } from './styles'
import { useRouter } from 'next/router'

function Card ({info}) {
const router = useRouter()

const validationStatus = (status) => {
    switch(status) {
        case 'Alive' :
        return (<><span className="alive">{status}</span></>)
        case 'Dead' :
        return (<><span className="dead">{status}</span></>)
        default :
        return (<><span>{status}</span></>)
    }
}

const validateRoute = () => {
    const route = router.asPath
    const validateRoute = route.split('/')[1]
    switch(validateRoute) {
        case 'detail' :
        return (
        <>
            <CardStyle>
            <div className="card">
                <img src={info.image} />
                <h3>{info.name}</h3>
                <p>Status: {validationStatus(info.status)}</p>
            </div>
            </CardStyle>
            <CardStyle>
                <div className = "card detail">
                <p><strong>Espécie: </strong>{info.species}</p>
                <p><strong>Gênero:</strong> {info.gender}</p>
                <p><strong>Origem:</strong> {info.origin.name}</p>
                <p><strong>Local:</strong> {info.location.name}</p>
                </div>
            </CardStyle>
        </>
        )
        case 'location' :
        return (
            <CardStyle>
                <div className = "card location">
                <p><strong>Nome do Local: </strong>{info[0].name}</p>
                <p><strong>Tipo:</strong> {info[0].type}</p>
                <p><strong>Dimensão:</strong> {info[0].dimension}</p>
                </div>
            </CardStyle>
        )
        default :
        return (
            <CardStyle>
            <div className="card">
                <img src={info.image} />
                <h3>{info.name}</h3>
                <p>Status: {validationStatus(info.status)}</p>
            </div>
            </CardStyle>
        )
    }
}

    return validateRoute()
}

export default Card