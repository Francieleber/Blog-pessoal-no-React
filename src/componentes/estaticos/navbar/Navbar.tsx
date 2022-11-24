import { AppBar, Toolbar, Typography } from "@material-ui/core";
import {Box} from '@mui/material';
import { color } from "@mui/system";
import React from "react";
import './Navbar.css'

function Navbar() {
    return (
        <>
            <AppBar position="static" style={{background: '#C2185B'}}>
                <Toolbar variant="dense">
                    <Box style={{ cursor: "pointer"}} >
                        <Typography variant="h5" style={{color: 'black',}}>
                            INSTAGRAM
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start" >
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" style={{color: 'black'}} >
                                home
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }} >
                            <Typography variant="h6" style={{color: 'black'}}>
                                postagens
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" style={{color: 'black'}}>
                                temas
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" style={{color: 'black'}}>
                                cadastrar tema
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" style={{color: 'black'}}>
                                logout
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>

    )
}
export default Navbar