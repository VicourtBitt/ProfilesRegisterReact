import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';
import Footer from '../../components/Footer';

// Importando o texto do footer, de uma pasta de constantes
import { FOOTER_RIGHTS } from '../../constants/FooterText';

// Layout padrão da aplicação, que possui o Header, MainContainer e Footer
// MainContainer é substituído dependendo da rota acessada. 
const DefaultScreen = () => {
    return (
        <>
            <Header />

            <MainContainer width='1080px' height='720px' borderRadius='40px'>
                <Outlet />
            </MainContainer>

            <Footer text={FOOTER_RIGHTS} />
        </>
    )
}

export default DefaultScreen;