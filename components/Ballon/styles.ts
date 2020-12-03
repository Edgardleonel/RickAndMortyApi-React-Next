import styled from 'styled-components'

export const BallonStyle = styled.div`
.ballon {
  box-shadow: ${props => props.theme.colors.box};
  cursor: initial;
  background: ${props => props.theme.colors.primary};
  border-radius: 3px;
  z-index: 999;
  position: absolute;
  width: 250px;
  flex-direction: column;
  display: flex;
  padding: 0;
  height: 4rem;
  margin-top: -4.75rem;
  color: #FFF;
  h3 {
    padding: 0;
    margin: 0;
  }
  &::before {
    border: solid;
    border-color: ${props => props.theme.colors.primary} transparent transparent transparent;
    border-width: 12px 10px 0 10px;
    content: "";
    left: 5%;
    bottom: -12px;
    position: absolute;
  }
}
`