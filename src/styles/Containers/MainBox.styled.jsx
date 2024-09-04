import styled from 'styled-components';

const MainBox = styled.main`
    flex-direction: ${(props) => props.direction || 'column'};
    width: ${(props) => props.width || '720px'};
    height: ${(props) => props.height || '720px'};
    background: ${(props) => props.background || '#181A1B'};
    border: ${(props) => props.border || '2px solid rgba(0, 0, 0, 0.3)'};
    border-radius: ${(props) => props.borderRadius || "0px"};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
    margin: 20px auto;

    @media (max-width: 575.8px) {
        width: 100%;
        height: 1280px;
    }
`

export default MainBox;