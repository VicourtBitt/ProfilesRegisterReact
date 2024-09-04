import styled from 'styled-components';

const Title = styled.h1`
    font-size: ${(props) => props.fontSize || '2rem'};
    border: ${(props) => props.border || 'none'};
    color: ${(props) => props.color || '#ffffff'};
    text-align: ${(props) => props.textAlign || 'center'};
    width: 80%;
`

export default Title;