import styled from 'styled-components'

export const PaginationStyle = styled.div`
.pagination {
  display: flex;
  button, input {
    margin-top: 2rem;
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: 6px;
    color: ${props => props.theme.colors.text};
    padding: 10px;
    transition: border-color 100ms ease 0s;
    background-color:  ${props => props.theme.colors.background};
    font-size: 1rem;
    font-weight: 700;
  }
  input{
    width: 50px;
    margin-left: 1rem;
    margin-right: 1rem;
    text-align: center;
  }
  button {
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: ${props => props.theme.colors.border};
    }
  }
  .search {
    border: none;
    border-bottom: 1px solid ${props => props.theme.colors.border};
    width: 80px;
    border-radius: 0;
    margin-left: 0;
  }
}
`