import LogoBox from "../../styles/Header-Footer/LogoBox.styled";
import CPTLogo from "../../assets/cpt-logo.webp";

// Componente de logo, com a imagem das PTC's   
const Logo = (props) => {
    const { src, alt } = props
    return (
        <LogoBox>
            <img src={CPTLogo || src} alt={alt}/>
        </LogoBox>
    )
}

export default Logo