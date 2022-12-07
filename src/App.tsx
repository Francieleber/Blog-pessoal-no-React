import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home/Home';
import Grid from '@material-ui/core/Grid';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaPostagem from './componentes/postagens/listaPostagem/ListaPostagem';
import ListaTema from './componentes/temas/listaTema/ListaTema';
import CadastroTema from './componentes/temas/cadastrarTema/CadastroTema';
import CadastroPost from './componentes/postagens/cadastroPost/CadastroPost';
import DeletarPostagem from './componentes/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './componentes/temas/deletarTema/DeletarTema';
import { Store } from '@mui/icons-material';
import { Provider } from 'react-redux';
import store from './store/Store';



function App() {
  return (

    <>
    <Provider store={store}>
    <Router>
    <Navbar />
      <Routes>
       <Route path='/home' element={<Home />}/>
       <Route path='/' element={<Login/>}/>
       <Route path='/Login' element={<Login />}/>
       <Route path='/Cadastrar' element={<CadastroUsuario/>}/>
       <Route path='/tema' element={<ListaTema/>}/>
       <Route path='/postagem' element={<ListaPostagem/>}/>
       <Route path="/formularioPostagem" element={<CadastroPost />} />
       <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
       <Route path="/formularioTema" element={<CadastroTema />} />
       <Route path="/formularioTema/:id" element={<CadastroTema />} />
       <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
       <Route path="/deletarTema/:id" element={<DeletarTema />} />
       </Routes>                                                                                                                                                                                                                                                                         
      <Footer />/
    </Router>
   </Provider>

    </>


  );
}
export default App;
