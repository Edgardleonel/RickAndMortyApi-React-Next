import styled from 'styled-components'

export const CardStyle = styled.div`
.card {
    margin-top: 1rem;
    box-shadow: ${props => props.theme.colors.box};
    text-decoration: none;
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    color: ${props => props.theme.colors.text};
    cursor: pointer;
    padding: 0;
    height: 25rem;
    img {
        width: 100%;
        max-height: 250px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    &.detail, &.location {
        padding: 1rem;
    }

    &.location {
        border: 1px solid ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.primary};
        background-color: #000;
        height: auto;
    }

    &:hover,
    &:focus,
    &:active {
    color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
    }
    
    h3 {
    margin: 0 0 .5rem 0;
    font-size: 1.5rem;
    padding: 0 1rem;
    }

    p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
    padding: 0 1rem;
        .alive {
            color: ${props => props.theme.colors.success}
        }        
        .dead {
            color: ${props => props.theme.colors.danger}
        }
    }
}

@media (max-width: 768px) {
    .card.detail {
        height: auto;
    }
}


`