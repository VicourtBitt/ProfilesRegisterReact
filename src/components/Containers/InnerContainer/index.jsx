import InnerBox from "../../../styles/Containers/GenericBox.styled";

// Container interno, com largura, altura e direção customizáveis
const InnerContainer = (props) => {
    const { width, height, children, direction } = props

    return (
        <InnerBox 
            width={width} 
            height={height} 
            direction={direction}
        >
            {children}
        </InnerBox>
    )
}

export default InnerContainer;