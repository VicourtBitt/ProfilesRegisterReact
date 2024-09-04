import MainBox from "../../styles/Containers/MainBox.styled";

// Container principal, com largura, altura, direção e bordas customizáveis
const MainContainer = (props) => {
    const { width, height, children, direction, borderRadius } = props

    return (
        <MainBox 
            width={width} 
            height={height} 
            direction={direction}
            borderRadius={borderRadius}
        >
            {children}
        </MainBox>
    )
}

export default MainContainer;