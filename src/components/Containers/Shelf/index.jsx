import ShelfContainer from "../../../styles/Containers/ShelfContainer.styled";

// Componente que renderiza um grid de itens, usado na HomePage
const Shelf = (props) => {
    // Destructuring das props
    const { children, columns, rows, width } = props

    // É possível alterar o número de colunas e linhas do grid
    return (
        <ShelfContainer width={width} columns={columns} rows={rows}>
            { children }
        </ShelfContainer>
    )
}

export default Shelf;