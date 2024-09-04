import PresentationPanel from "../../components/Panels/PresentationPanel";
import SocialPanel from "../../components/Panels/SocialPanel";

// Página inicial da aplicação, possui as redes sociais
// e uma breve descrição do projeto
const HomePage = () => {
    return (
            <>
                <PresentationPanel />
                
                <SocialPanel />
            </>
        )
}

export default HomePage;