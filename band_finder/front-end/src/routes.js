import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CadastroCliente from './pages/Cadastro-clientes';
import CriarAnuncio from './pages/CriarAnuncio'
import CriarPost from './pages/CriarPosts';
import PaginaUsuario from './pages/PaginaUsusario';

function AppRoutes (){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/cadastro" element={<CadastroCliente/>} />
            <Route path="/vendas" element={<CriarAnuncio/>} />
            <Route path="/post" element={<CriarPost/>} />
            <Route path="/user" element={<PaginaUsuario/>} />

        </Routes>
        
        </BrowserRouter>

    )
}; 
export default AppRoutes