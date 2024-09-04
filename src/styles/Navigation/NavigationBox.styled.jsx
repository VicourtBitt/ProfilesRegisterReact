import styled from 'styled-components';

const NavigationBox = styled.nav`
    padding: 1rem;
    background: #303030;
    display: flex;
    flex-direction: row;
    justify-content: end;

    & > ul {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 1080px;
        margin: 0 auto; 
    }
`

export default NavigationBox;