import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Box, Button, Container, Drawer, Typography } from '@mui/material';

import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const Slider2 = () => {
    const [swiper, setSwiper] = useState(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleNext = () => {
        if (swiper) {
            swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiper) {
            swiper.slidePrev();
        }
    };

    const outlinedButton = {
        border: '1px solid beige',
        color: 'beige',
        height: "20%",
        width: "30%",
        fontSize: "1rem",
        padding: "10px",
        marginBottom: "7%",
        backgroundColor: 'transform',
        borderRadius: "0",

        '&:hover': {
            border: '1px solid beige',
            backgroundColor: 'beige',
            color: 'rgb(100, 80, 37)',
        }
    };

    const linkStyle = {
        textDecoration: 'none', // Remove underline
        color: 'inherit', // Inherit color from parent
        transition: 'color 0.3s',
        '&:hover': {
            color: 'black',
        },
    };

    const navbarLinks = [
        { title: 'HOME', href: '#' },
        { title: 'PAGES', href: '#' },
        { title: 'PORTFOLIO', href: '#' },
        { title: 'BLOG', href: '#' },
        { title: 'SHOP', href: '#' }
    ];

    const slides = [
        {
            imageUrl: 'https://tobel.qodeinteractive.com/wp-content/uploads/2021/04/home-2-parallax-1.jpg',
            buttonText: 'DISCOVER',
            title:"NEVADE COLECTION"
        },
        {
            imageUrl: 'https://tobel.qodeinteractive.com/wp-content/uploads/2021/06/Home-8-video-img-1536x600.jpg',
            buttonText: 'DISCOVER',
            title:"LOUNGE AESTHETIC"
        },
        {
            imageUrl: 'https://tobel.qodeinteractive.com/wp-content/uploads/2021/06/Home-2-video-img-1536x560.jpg',
            buttonText: 'DISCOVER',
            title:"MADE WITH LOVE"
        }
    ];

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setIsDrawerOpen(open);
    };

    return (
        <Box sx={{
            position: 'relative',
            margin: "0",
        }}>
            <Swiper
                loop={true}
                autoplay={{ delay: 5000 }} // 5 seconds delay between slides
                onSwiper={setSwiper}
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                sx={{ color: "beige", position: 'relative' }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <Box sx={{
                            backgroundImage: `url('${slide.imageUrl}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundAttachment: 'fixed',
                            height: '100vh',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
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
                            <Container>
                                <Box sx={{
                                    textAlign: "center", // Align text center
                                    color: "beige",
                                    marginTop: "10%",
                                    animation: 'flowUpDown 3s infinite alternate',
                                }}>

                                    <Typography
                                        sx={{ fontFamily: "Belleza,sans-serif" }}
                                        variant='h1'>{slide.title} </Typography>

                                    <Box sx={{ marginTop: "10%" }} >
                                        <Button sx={outlinedButton}>{slide.buttonText}</Button>
                                    </Box>

                                </Box>
                            </Container>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Box sx={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '95%',
                display: 'flex',
                justifyContent: 'space-around',
                padding: '3% 20px',
                backgroundColor: 'transparent',
                zIndex: '1000',
                overflow: "hidden",
            }}>
                <Typography variant="h5" sx={{ color: 'beige', fontFamily: 'Belleza, sans-serif',fontSize: "1.3rem" }}>TÖBEL</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    {navbarLinks.map((link, index) => (
                        <Button key={index} sx={{ color: 'beige', fontSize: "1rem", fontFamily: 'Belleza, sans-serif' }} href={link.href}>{link.title}</Button>
                    ))}
                </Box>
                <Button sx={{ color: 'beige', fontFamily: 'Belleza, sans-serif', fontSize: "1rem" }} onClick={toggleDrawer(true)}>Menu</Button>
            </Box>
            <Drawer anchor='right' open={isDrawerOpen} onClose={toggleDrawer(false)} sx={{ '& .MuiDrawer-paper': { backgroundColor: 'black', padding: "4%", color: 'beige', textAlign: "center" } }}>
                <Box sx={{ width: 250, marginTop: "40%" }}>
                    <Typography variant="h4" sx={{ color: 'beige', fontFamily: 'Belleza, sans-serif' }}>TÖBEL</Typography>
                    <p>We make interiors infused with the spirit of contemporary design philosophies.</p>
                    <p>A: Seestrasse 21, Zurich</p>
                    <p>T: 00145288962</p>
                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: "60%" }}>
                        <p style={{ marginRight: '10px', marginBottom: "0px" }}>
                            <a href="https://www.instagram.com/your_instagram" target="_blank" rel="noopener noreferrer" style={linkStyle}>INSTAGRAM</a>
                        </p>
                        <p style={{ marginRight: '10px', marginBottom: "0px" }}>
                            <a href="https://www.facebook.com/your_facebook" target="_blank" rel="noopener noreferrer" style={linkStyle}>FACEBOOK</a>
                        </p>
                        <p style={{ marginRight: '10px', marginBottom: "0px" }}>
                            <a href="https://www.linkedin.com/your_linkedin" target="_blank" rel="noopener noreferrer" style={linkStyle}>LINKEDIN</a>
                        </p>
                    </div>

                </Box>
            </Drawer>


        </Box>
    );
};

export default Slider2;
