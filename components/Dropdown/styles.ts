import styled from 'styled-components'

export const DropStyle = styled.div`
button {
    margin-top: 2rem;
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: 6px;
    color: ${props => props.theme.colors.text};
    padding: 10px;
    transition: border-color 100ms ease 0s;
    background-color:  ${props => props.theme.colors.background};
    font-size: 1rem;
    font-weight: 700;
    &:hover ~ .Dropdown-panel {
      position: absolute;
      display: block;
      opacity: 1;
      transition: .7s;
    }
  }

  .Dropdown-panel {
    display: none;
    opacity: 0;
    background-color:  ${props => props.theme.colors.background};
    border-radius: 6px;
    border: none;
    box-shadow: ${props => props.theme.colors.box};
    min-width: 20%;
    overflow: hidden;
    &:hover {
      position: absolute;
      display: block;
      opacity: 1;
      transition: .7s;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        cursor: pointer;
        padding: .5rem 1rem;
        text-align: left;
        border-bottom: 1px solid ${props => props.theme.colors.border};
        &:hover {
          background: ${props => props.theme.colors.border};
        }
      }
    }
  }

  @media (max-width: 768px) {
    .Dropdown-panel {
        min-width: 70%;
    }
  }
`