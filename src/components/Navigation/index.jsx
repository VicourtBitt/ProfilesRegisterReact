import { Link } from "react-router-dom";
import NavigationBox from "../../styles/Navigation/NavigationBox.styled";
import NavItem from "../../styles/Navigation/NavItem.styled";

// Componente de navegação, com links para as páginas principais
const Navigation = () => {
    
    // Array de objetos com o nome e o path de cada item do menu
    const menuItems = [
        { name: 'HOME', path: '/' },
        { name: 'PERFIS', path: '/profiles' },
        { name: 'REGISTRO', path: '/register' }
    ]

    return (
        <NavigationBox>
            <ul>
                {menuItems.map(item => (
                    <Link to={item.path} key={item.name}>
                        <NavItem>{item.name}</NavItem>
                    </Link>
                ))}
            </ul>
        </NavigationBox>
    )
}

export default Navigation;