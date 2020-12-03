import { BallonStyle } from './styles'

function Card ({referral}) {
    return (
        <BallonStyle>
            <div className="ballon">
                <p>{referral}</p>
            </div> 
        </BallonStyle>
    )
}

export default Card