import styled from 'styled-components'

export const ChipStyle = styled.div`
.code {
    margin: 5px;
    align-items: center;
    background: ${props => props.theme.colors.backgroundAvatar};
    border-radius: 1.5rem;
    padding: 1rem;
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
    &:hover {
        box-shadow: ${props => props.theme.colors.box};
    }
}
`