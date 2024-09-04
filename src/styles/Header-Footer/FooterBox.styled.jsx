import styled from 'styled-components';

const FooterBox = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #303030;
    height: ${(props) => props.height || '120px'};
    width: 100%;
`

export default FooterBox;