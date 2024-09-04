import { useContext } from "react";
import { MenuContext } from "../../Router";

import DropdownBtn from "../../styles/Dropdown/Dropdown.styled";

// Botão de dropdown que abre e fecha o menu
const DropDownBtn = (props) => {
    const { text } = props
    
    // Resgata o estado isOpen e a função setIsOpen do componente MenuContext
    const { isOpen, setIsOpen } = useContext(MenuContext)

    // Função que alterna o estado de isOpen
    const dropDownClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <DropdownBtn onClick={dropDownClick}>
            { text }
        </DropdownBtn>
    )
}

export default DropDownBtn;