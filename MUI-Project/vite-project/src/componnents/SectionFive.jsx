import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

const containerStyle = {
    transition: "background .3s, border .3s, border-radius .3s, box-shadow .3s",
    marginTop: "0%",
    marginBottom: "5%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
};

const titleStyle = {
    color: 'rgb(100, 80, 37,0.3)',
    fontStyle: "italic",
    marginBottom: "0px",
    fontSize: "40px",
    textAlign: "left"
};

const contentStyle = {
    color: "black",
    textAlign: "left",
    marginTop: "20%",
    marginLeft:"10%",
    marginBottom: "10%",
    maxWidth: "70%",
   
};

const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    color: 'rgb(100, 80, 37)',
    marginTop: "10%",
    position: "relative",
};

const imageAnimation = {
    animation: 'flowUpDown 3s infinite alternate',
};

export default function SectionFive() {
    return (
        <Container sx={containerStyle}>
            <Grid container spacing={1}>
                <Grid item xs={12} md={6} lg={5}>
                    <Box sx={contentStyle}>
                        <p style={titleStyle}>C o l o r s</p>
                        <Typography variant='h1' sx={{
                            fontFamily: "Belleza,sans-serif",
                            display: "block",
                            fontSize: "50px",
                        }}>
                            SHADES OF ELEGANCE
                        </Typography>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p style={{ marginTop: "15%" }}>READ MORE</p>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={7}>
                    <Box sx={imageContainerStyle}>
                        <style>
                            {`
                                @keyframes flowUpDown {
                                    0% {
                                        transform: translateY(0);
                                    }
                                    100% {
                                        transform: translateY(-30px);
                                    }
                                }
                            `}
                        </style>
                        <img style={{ width: "45%", height: "100%", maxWidth: "100%", margin: "auto", ...imageAnimation }}
                            src='https://tobel.qodeinteractive.com/wp-content/uploads/2021/04/home-2-image-2-768x1103.jpg' alt="Image 1" />
                        <img style={{ width: "45%", height: "100%", maxWidth: "100%", marginTop: "15%", margin: "auto", ...imageAnimation }}
                            src='https://tobel.qodeinteractive.com/wp-content/uploads/2021/04/home-2-image-1-768x743.jpg' alt="Image 2" />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
