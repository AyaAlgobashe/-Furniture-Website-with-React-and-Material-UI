import { Box, Button } from '@mui/material';
import { Grid } from '@mui/material';
import React, { useState } from 'react';

const SectionFour = () => {

    const [hoveredImage1, setHoveredImage1] = useState(false);
    const [hoveredImage2, setHoveredImage2] = useState(false);

    const imgStyle = {
        width: "100%", // Adjusted to cover the entire box
        height: "100%", // Adjusted to cover the entire box
        objectFit: "cover",
    };

    const imgBox = {
        position: "relative",
        width: "100%",
        height: "100%", 
        overflow: "hidden",
        transition: "transform 0.3s ease-in-out",

    };

    const outlinedButton = {
        border: '0px solid rgb(100, 80, 37)',
        color: 'rgb(100, 80, 37)',
        height: "20%",
        width: "30%",
        fontSize:"1rm",
        padding: "10px",
        marginBottom:"7%",
        backgroundColor: 'beige',
        borderRadius: "0",
        '&:hover': {
            border: '1px solid rgb(100, 80, 37)',
            color: 'white',
        }
    };

    const dataInfo = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        width: "100%",
        color: "white",
    };

    return (
        <Grid container>
            <Grid item xs={6}>
                <Box sx={{...imgBox, ...{transform: hoveredImage1 ? "translateX(10px)" : "none"}}}>
                    <img style={imgStyle} src='https://tobel.qodeinteractive.com/wp-content/uploads/2021/04/home-2-ban-1.jpg' alt="Image 1" />
                    <Box sx={dataInfo} >
                        <p style={{fontSize:"30px"}}>SALE</p>
                        <Button
                            sx={outlinedButton}
                            onMouseEnter={() => setHoveredImage1(true)}
                            onMouseLeave={() => setHoveredImage1(false)}
                        >
                            SHOP NOW
                        </Button>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box sx={{...imgBox, ...{transform: hoveredImage2 ? "translateX(10px)" : "none"}}}>
                    <img style={imgStyle} 
                    src='https://tobel.qodeinteractive.com/wp-content/uploads/2021/04/home-2-ban-2.jpg' alt="Image 2" />
                    <Box sx={dataInfo} >
                        <p style={{fontSize:"30px"}}>NOW</p>
                        <Button
                            sx={outlinedButton}
                            onMouseEnter={() => setHoveredImage2(true)}
                            onMouseLeave={() => setHoveredImage2(false)}
                        >
                            DISCOVER
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default SectionFour;
