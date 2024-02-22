import { Box, Button, Container, Typography, useMediaQuery } from '@mui/material';
import React from 'react';

const SectionSex = () => {
    const outlinedButton = {
        border: '1px solid beige',
        color: 'beige',
        height: "20%",
        width: "30%",
        fontSize:".6rem",
        padding: "10px",
        marginBottom:"7%",
        backgroundColor: 'transform',
        borderRadius: "0",
        
        '&:hover': {
            border: '1px solid beige',
            backgroundColor: 'beige',
            color: 'rgb(100, 80, 37)',
        }
    };
    // const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <Box sx={{
            position: 'relative', 
            marginTop:"10%"
        }}>
            <Box sx={{
                backgroundImage: `url('https://tobel.qodeinteractive.com/wp-content/uploads/2021/04/home-2-parallax-1.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                height: '100vh',
            }}>
                <Container>
                    <Box sx={{
                        position: "absolute",
                        textAlign: "right",
                        top: "55%", right: "10%",
                        transform: "translateY(-50%)",
                        width: "40%",
                        color: "beige",
                    }}>
                        <Typography sx={{
                            fontStyle: "italic",
                            marginBottom: "0px",
                            fontSize: "1.5rem",
                        }} variant='p'>N e w</Typography>
                        <Typography sx={{ fontFamily: "Belleza,sans-serif",fontSize: "2rem", }} variant='h2'>MADE WITH LOVE AND DEDICATION</Typography>
                        
                        <Box sx={{marginTop :"10%"}} >
                            <Button sx={outlinedButton }>DISCOVER</Button>
                        </Box>
                        
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}

export default SectionSex;
