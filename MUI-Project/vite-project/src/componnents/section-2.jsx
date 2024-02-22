import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';

const consecteturDisplay = {
    transition: "background .3s,border .3s,border-radius .3s,box-shadow .3s",
    marginTop: "10%",
    marginBottom:"10%",
   


}
const outlinedButton = {
    border: '1px solid rgb(100, 80, 37)',
    color: 'rgb(100, 80, 37)',
    height: "20%",
    width: "30%",
    padding: "10px",
    marginTop: "5%",
    marginBottom:"7%",
    '&:hover': {
        backgroundColor: 'rgb(100, 80, 37)',
        border: '1px solid rgb(100, 80, 37)',
        color: 'white',

    }
}

export default function BasicGrid() {
    return (
        <Container sx={consecteturDisplay} >
            <Grid container spacing={1}>
                <Grid md={8}
                    sm={12}
                    lg={6}>
                    <Box sx={{ color: "black", textAlign: "left", marginTop: "10%", maxWidth: "85%" , marginLeft:"10%"}}>
                        <h2 style={{ color: "rgb(100, 80, 37)" }}>New</h2>
                        <h1 sx={{
                            display: "block", fontSize: " 1.17em",
                        }}>
                            GENIUNELY FRESH WAY OF THINKING
                        </h1>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elitse do eiusmod tempor incididunt ut labore et dolore magnta liquia. Utenimadm inim veniam, quis nostrud exercitation ullamco la borisnisi ut aliquipex ea com modo conseqat.
                            Duis aute irure dolorinre prehe nderit voluptate velit esse.</p>

                        <Button variant="outlined" sx={outlinedButton}
                        >DESCOVER</Button>



                    </Box>
                </Grid>
                <Grid md={8}
                    sm={12}
                    lg={6}>
                    <img style={{ width: "90%", height: "100%" }}
                        src='https://tobel.qodeinteractive.com/wp-content/uploads/2021/04/home-2-img-5.jpg' />
                </Grid>

            </Grid>
        </Container>
    );
}