import styled from "styled-components";

const GenericBox = styled.div`
    flex-direction: ${(props) => props.direction || 'column'};
    width: ${(props) => props.width || '720px'};
    height: ${(props) => props.height || '720px'};
    border: ${(props) => props.border || 'none'};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto;

    @media (max-width: 575.8px) {
        width: 100%;
        height: ${(props) => props.heightSM || '560px'};
    }
`

export default GenericBox;