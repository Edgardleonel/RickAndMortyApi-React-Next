import styled from 'styled-components'

export const CardStyle = styled.div`
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

&:hover,
&:focus,
&:active {
color: ${props => props.theme.colors.primary};
border-color: ${props => props.theme.colors.primary};
}
 
h3 {
margin: 0 0 1rem 0;
font-size: 1.5rem;
padding: 0 1rem;
}

p {
margin: 0;
font-size: 1.25rem;
line-height: 1.5;
padding: 0 1rem;
}


`