import styled from 'styled-components'

const Container = styled.div`
  width:${props => props.width ? props.width : "auto"};
  height:${props => props.height ? props.height : "auto"};
  background: ${props => props.bg ? props.bg : "transparent"};
`;


export {
    Container
}