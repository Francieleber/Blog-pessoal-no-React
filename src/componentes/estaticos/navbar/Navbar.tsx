import React from 'react';
import { AppBar, Toolbar, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Navbar.css'
import useLocalStorage from 'react-use-localstorage';
function Navbar() {

    const [token,setToken]= useLocalStorage('token')
    const Navigate=useNavigate()

    function logout(){
        setToken('')
        Navigate('/login')
    }
    return (
        <>
            <AppBar position="static" style={{backgroundColor:"#C2185B"}}>
                <Toolbar variant="dense">
                    <Box className='cursor'>
                        <Typography variant="h5" color="inherit">
                            INSTAGRAM
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className='cursor'>
                           <Link to={'/home'} className='text-decorator-none cursor'><Typography variant="h6" color="inherit">
                                home
                            </Typography></Link> 
                            
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Link to={'/tema'}className='text-decorator-none cursor'><Typography variant="h6" color="inherit">
                                postagens
                            </Typography></Link>
                           
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Link to={'/tema'} className='text-decorator-none cursor'><Typography variant="h6" color="inherit">
                                temas
                            </Typography></Link>
                            
                        </Box>
                       
                        <Box mx={1} className='cursor'>
                       <Link to={'/formularioTema'}className='text-decorator-none cursor'> <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography></Link>
                            
                            
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className='cursor' onClick={logout}  >
                                <Typography variant="h6" color="inherit">
                                    logout
                                </Typography>
                            </Box>
                        </Link>
                        
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
