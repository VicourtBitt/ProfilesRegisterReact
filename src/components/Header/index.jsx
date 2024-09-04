import HeaderBox from '../../styles/Header-Footer/HeaderBox.styled';
import Logo from '../Logo';
import DropdownBtn from '../DropdownBtn';
import Navigation from '../Navigation';

// Importa o contexto MenuContext
import { useContext } from 'react';
import { MenuContext } from '../../Router';

// Componente Header, que renderiza o Logo, o DropdownBtn e o Navigation
const Header = () => {
    // Resgata o estado isOpen do componente MenuContext
    const { isOpen } = useContext(MenuContext)

    // Se isOpen for true, então menuInteraction recebe o componente Navigation
    const menuInteraction = isOpen && <Navigation />; 

    return (
        <>
            <HeaderBox>
                <Logo alt='Logo do Site'/>
                <DropdownBtn text='☰'/>
            </HeaderBox>
            {menuInteraction}
        </>
    )
}

export default Header;