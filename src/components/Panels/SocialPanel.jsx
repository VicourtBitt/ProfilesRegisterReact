import Shelf from "../Containers/Shelf";
import SocialPanelBox from "../../styles/Panels/SocialPanel.styled";
import Title from "../../styles/Text/Title.styled";

// Imagens dos ícones das redes sociais
import github from "../../assets/github.png"; 
import youtube from "../../assets/youtube.png";

// Painel com os links/imagens das redes sociais
const SocialPanel = () => {
    return (
        <Shelf width='840px' height='280px' direction='row'>
            <SocialPanelBox width='400px' height='280px'>
                <a href="https://github.com/VicourtBitt/comunidade_parada_tech/tree/main">
                    <img src={github} alt="Github" />
                </a>

                <Title fontSize="1.5rem">
                    GitHub das PTC's
                </Title>
            </SocialPanelBox>

            <SocialPanelBox width='400px' height='280px'>
                <a href="https://www.youtube.com/@VicourtBittProjects">
                    <img src={youtube} alt="YouTube" />
                </a>
                
                <Title fontSize="1.5rem">
                    Canal do YouTube
                </Title>
            </SocialPanelBox>
        </Shelf>
    )
}

export default SocialPanel;