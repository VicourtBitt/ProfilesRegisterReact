import styled from 'styled-components';

const LogoBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    transition: 500ms;

    &:hover {
        transform: scale(1.05)
    }

    & img {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 575.8px) {
        height: 80px;
    }
`

export default LogoBox;