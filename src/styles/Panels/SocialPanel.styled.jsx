import styled from "styled-components";

const SocialPanelBox = styled.section`
    flex-direction: ${(props) => props.direction || 'column'};
    width: ${(props) => props.width || '720px'};
    height: ${(props) => props.height || '720px'};
    border: ${(props) => props.border || 'none'};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto;

    & a {
        height: 200px;
        display: flex;
        justify-content: center;
        text-align: center;
        border-radius: 50%;
        
        & img{
            border-radius: 50%;
            width: 200px;
            height: 200px;
            transition: transform 0.5s;

            &:hover {
                transform: scale(1.2);
            }
        }
    }

    @media (max-width: 575.8px) {
        width: 100%;
        height: ${(props) => props.heightSM || '300'};
    }
`

export default SocialPanelBox;