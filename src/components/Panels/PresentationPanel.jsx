import OuterContainer from "../Containers/OuterContainer";
import Title from "../../styles/Text/Title.styled";
import Paragraph from "../../styles/Text/Paragraph.styled";

// Textos constantes da página inicial
import { HOMEPAGE_FIRST_TITLE, HOMEPAGE_FIRST_PARAGRAPH } from "../../constants/HomePageTexts";

// Painel de apresentação da página inicial, com título e descrição
const PresentationPanel = () => {
    return (
        <OuterContainer width='840px' height='280px'>
            <Title fontSize="2.5rem">
                {HOMEPAGE_FIRST_TITLE}
            </Title>

            <Paragraph>
                {HOMEPAGE_FIRST_PARAGRAPH}
            </Paragraph>
        </OuterContainer>
    )
}

export default PresentationPanel;