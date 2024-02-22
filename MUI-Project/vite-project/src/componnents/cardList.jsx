import React, { useState } from 'react';
import { Furniture } from '../componnents/furnuture'; // Corrected import path
import { Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const CardList = () => {
    const [furniture, setFurniture] = useState(Furniture);
    const [hoveredCards, setHoveredCards] = useState(Array(furniture.length).fill(false));

    const handleCardHover = (index) => {
        setHoveredCards(prevState => {
            const newHoveredCards = [...prevState];
            newHoveredCards[index] = true;
            return newHoveredCards;
        });
    };

    const handleCardLeave = (index) => {
        setHoveredCards(prevState => {
            const newHoveredCards = [...prevState];
            newHoveredCards[index] = false;
            return newHoveredCards;
        });
    };

    const hoverCard = {
        position: "absolute",
        bottom: 0,
        left: "10%", 
        width: "70%", 
        height: "240px",
        backgroundColor: "beige",
        
        color: "rgba(255, 255, 255, 0.9)", 
        padding: "10px",
        textAlign: "center",
        transition: "all 0.8s ease-in-out",
        transform: (index) => (hoveredCards[index] ? "scale(1)" : "scale(0)"), 
        zIndex: (index) => (hoveredCards[index] ? 1 : -1), 
    };

    const boxStyle = { 
        display: 'flex', 
        justifyContent: 'center',
        color: 'rgb(100, 80, 37)' ,
        marginTop:"10%",
        transition: "all 2s"    
    };

    const iconStyle = { 
        color: "black",
        fontSize: "20px",
        padding: "10px",
    };

    const infoData = { 
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-around', 
        color: 'rgb(100, 80, 37)', 
        marginTop: "10px",
        padding: "10px",
    };

    return (
        <Container sx={{ flexGrow: 2, margin:"auto" }}>
            <h1 
            style={{ textAlign: "left" ,color: "black"}}>
                OUR PRODUCTS ARE <br/>CUSTOM MADE</h1>
            <Grid container spacing={2} justifyContent="center">
                {furniture.map((furn, index) => (
                    <Grid
                        item
                        xs={12} 
                        sm={6}  
                        md={6}  
                        lg={4}  
                        key={index}
                    >
                        <Box position="relative">
                            <img 
                                src={furn.productImg} 
                                style={{ width: "100%", height: "300px" }} 
                                alt={furn.productName}  
                                onMouseEnter={() => handleCardHover(index)}
                                onMouseLeave={() => handleCardLeave(index)}
                            />
                            <Box
                                sx={{ ...hoverCard, transform: hoverCard.transform(index), zIndex: hoverCard.zIndex(index) }}
                            >
                                <Box sx={{marginTop:"30%",transition: "all 0.8s ease-in-out"}}>
                                <Typography variant='p' sx={{ fontSize: "20px",color: "black"}}>Add to cart</Typography>
                                </Box><Box sx={boxStyle}>
                                    <VisibilityIcon sx={iconStyle} />
                                    <FavoriteBorderIcon sx={iconStyle} />
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={infoData}>
                            <p>{furn.productName}</p>
                            <p>{furn.price}</p>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default CardList;
