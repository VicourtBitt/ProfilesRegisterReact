import styled from "styled-components";

const ShelfContainer = styled.section`
    display: grid;
    width: ${(props) => props.width || '100%'};
    grid-template-columns: repeat(2, minmax(300px, 1fr));
    grid-auto-rows: 300px;
    grid-gap: 1rem;

    @media (max-width: 575.8px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, 300px);
        width: 100%;

        & * {
            width: 100%;
            height: 100%;
        }
    }
`

export default ShelfContainer;