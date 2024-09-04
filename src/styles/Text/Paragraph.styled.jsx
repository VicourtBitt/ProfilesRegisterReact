import styled from 'styled-components';

const Paragraph = styled.p`
    border: ${(props) => props.border || 'none'};
    text-align: ${(props) => props.textAlign || 'center'};
    font-size: ${(props) => props.fontSize || '1rem'};
    color: ${(props) => props.color || '#ffffff'};
    line-height: ${(props) => props.lineHeight || '1.5'};
    width: 80%;
`

export default Paragraph;