import styled from 'styled-components'

export const FooterStyle = styled.div`
  margin-top: 5rem;
  width: 100%;
  height: 100px;
  border-top: 1px solid ${props => props.theme.colors.border};
  display: flex;
  justify-content: center;
  align-items: center;
`