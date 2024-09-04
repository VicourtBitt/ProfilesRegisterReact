import { BrowserRouter } from 'react-router-dom'
import Router from './Router'

// Basicamente, aqui começamos nossa SPA (Single Page Application)
// com o BrowserRouter, que é o componente que vai gerenciar as rotas
// da nossa aplicação.
function App() {

  	return (
		<>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</>
  	)
}

export default App
