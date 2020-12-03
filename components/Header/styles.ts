import styled from 'styled-components'

export const HeaderStyle = styled.div`
  color: #FFF;
  width: 100%;
  text-align: center;
  background: #000;
  margin-bottom: 2rem;
  span {
    color: ${props => props.theme.colors.primary};
  }
  h1 {
    cursor: pointer;
  }
`