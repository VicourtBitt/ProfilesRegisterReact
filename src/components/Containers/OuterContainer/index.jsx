import OuterBox from "../../../styles/Containers/GenericBox.styled";

// Container externo, com largura, altura e direção customizáveis
const OuterContainer = (props) => {
    const { width, height, children, direction } = props

    return (
        <OuterBox 
            width={width} 
            height={height} 
            direction={direction}
        >
            {children}
        </OuterBox>
    )
}

export default OuterContainer;