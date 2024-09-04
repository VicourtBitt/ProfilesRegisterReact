import styled from 'styled-components'

const Dropdown = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    line-height: 80px;
    width: 100px;
    transition: 500ms;
    background: #191919;
    border-radius: 20px;
    font-size: 2.5rem;

    &:hover {
        background: #202020;
    }

    &:active {
        transform: scale(1.05);
    }

    @media (max-width: 575.8px) {
        height: 60px;
        line-height: 60px;
        width: 80px;
        font-size: 2rem;
    }
`

export default Dropdown;