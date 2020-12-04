import styled from 'styled-components'

export const Container = styled.div`
  min-height: 50vh;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


.main {
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.title a {
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
}

.title a:hover,
.title a:focus,
.title a:active {
  text-decoration: underline;
}

.title {
  margin: 0px;
  color: ${props => props.theme.colors.text};
  font-weight: 900;
  font-size: 5.625rem;
}

.title,
.description {
  text-align: center;
}

.description {
  line-height: 1.5;
  font-size: 2rem;
  margin: 0;
  margin-bottom: 3rem;
}

.logo {
  height: 1em;
}

.open{
  opacity: 1;
  visibility: visible;
}
.close {
  opacity: 0;
  visibility: hidden;
}

.back {
  padding-bottom: 2rem;
  button {
    display: flex;
    align-items: center;
    margin-top: 2rem;
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: 6px;
    color: ${props => props.theme.colors.text};
    padding: 10px;
    transition: border-color 100ms ease 0s;
    background-color:  ${props => props.theme.colors.background};
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    &:hover {
      background-color: ${props => props.theme.colors.border};
    }
  }
}



@media (max-width: 768px) {
  .title {
      font-size: 3rem;
  }
}
`

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 90%;

@media (max-width: 768px) {
  width: 100%;
  flex-direction: column;
}
`

export const Col = styled.div`
  margin: 1rem;
  flex-basis: 25%;
  padding: 1.5rem;
  text-align: center;
`