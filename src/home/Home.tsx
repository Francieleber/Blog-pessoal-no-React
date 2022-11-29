import React from "react";
import './Home.css'
import {Button, Grid, Typography} from '@material-ui/core'
import { lightGreen } from "@material-ui/core/colors";
import { Box } from "@mui/material";

function Home (){
    return(
        <>
       <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#EC407A" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>Entre, mas não faça bagunça, por favor 😂!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#3F51B5", color: "white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://connectchildcare.com/wp-content/uploads/2020/06/StaffPlan-Images-04-2048x2048.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        </>
    )
}
export default Home 