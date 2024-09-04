import FooterBox from "../../styles/Header-Footer/FooterBox.styled";
import FooterRights from "../../styles/Header-Footer/FooterRights.styled";

const Footer = (props) => {
    const { text } = props
    
    return (
        <FooterBox>
            <FooterRights>
                { text }
            </FooterRights>
        </FooterBox>
    )
}

export default Footer;