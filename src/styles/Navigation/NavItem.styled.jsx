import styled from 'styled-components';

const NavItem = styled.li`
    width: 200px;
    list-style: none;
    padding: 1rem;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    text-align: right;

    &:hover {
        background: #252525;
    }

    @media (max-width: 575.8px) {
        font-size: 1.5rem;
        padding: 0.5rem;
        margin-right: 1rem;
    }
`

export default NavItem;