import styled from 'styled-components'

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.bg ? props.bg : "white"};
  color: ${props => props.color ? props.color : "black"};
  box-shadow:${props => props.shadow ? props.shadow : "none"};
  font-size: medium;
  margin: 1em;
  padding: ${props => props.padding ? props.padding : "8px 10px" };
  border: ${props => props.border ? props.border : "none" };;
  border-radius: 3px;
  cursor:pointer;
`;


export {
    Button
}