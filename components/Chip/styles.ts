import styled from 'styled-components'

export const ChipStyle = styled.div`
display: flex;
.code {
    margin: 5px;
    align-items: center;
    background: ${props => props.theme.colors.backgroundAvatar};
    border-radius: 1rem;
    padding: .5rem 1rem;
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
    display: flex;
    justify-content: flex-start;
    max-width: 110px;                   
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    span {
        margin-left: 5px;
        text-align: center;
    }
    &:hover {
        box-shadow: ${props => props.theme.colors.box};
    }
}
`