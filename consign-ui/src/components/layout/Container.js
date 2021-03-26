import styled from 'styled-components'

const Container = styled.div`
  width:${props => props.width ? props.width : "auto"};
  height:${props => props.height ? props.height : "auto"};
  background: ${props => props.bg ? props.bg : "transparent"};
  display:${props => props.display ? props.display : "block"};
  justify-content:${props => props.justify ? props.justify : "start"};
  align-items:${props => props.align ? props.align : "start"};

`;


export {
    Container
}