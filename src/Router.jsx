import { Routes, Route } from 'react-router-dom';
import { createContext, useState } from 'react'

// o DefaultScreen é o layout padrão da aplicação, que possui o
// Header, MainContainer e Footer. MainContainer é substituído
import DefaultScreen from './layouts/DefaultScreen'

// Aqui estão as telas que substituem o MainContainer dependendo
// da rota acessada.
import HomePage from './pages/HomePage';
import ProfilesPage from './pages/ProfilesPage';
import RegisterPage from './pages/RegisterPage';

// Fazemos toda essa gestão de rotas com o React Router Dom,
// utilizando Routes e Route para definir as rotas e o que
// será renderizado em cada uma delas.
const Router = () => {
    
    // Aqui, criamos um contexto para gerenciar o estado do menu
    // que é aberto e fechado. O valor inicial é false
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <MenuContext.Provider value={{ isOpen, setIsOpen }}>
                <Routes>
                    <Route path='/' element={ <DefaultScreen /> }>
                        <Route path='/' element={ <HomePage /> } />
                        <Route path='/profiles' element={ <ProfilesPage /> } />
                        <Route path='/register' element={ <RegisterPage /> } />
                    </Route>
                </Routes>
            </MenuContext.Provider>
        </>
    )
}

export const MenuContext = createContext()
export default Router;