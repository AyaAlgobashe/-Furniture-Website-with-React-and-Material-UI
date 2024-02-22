import React, { useState, useRef, useEffect } from 'react';
import SwiperCore, { Navigation, Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// Install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

const Slider = () => {
    const [swiper, setSwiper] = useState(null);

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

    return (
        <Box sx={{
            position: 'relative',
            margin: "0"
        }}>
            <Swiper
                loop={true}
                autoplay={{ delay: 5000 }} // 5 seconds delay between slides
                onSwiper={setSwiper}
            >
                <SwiperSlide>
                    <Box sx={{
                        backgroundImage: `url('https://tobel.qodeinteractive.com/wp-content/uploads/2021/06/Home-8-video-img-1536x600.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed',
                        height: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center', // Center horizontally and vertically
                    }}>
                        <Container>
                            <Box sx={{
                                textAlign: "center", // Align text center
                                color: "beige",
                                marginTop: "10%",
                                animation: 'flowUpDown 3s infinite alternate',
                            }}>

                                <Typography
                                    sx={{ fontFamily: "Belleza,sans-serif" }}
                                    variant='h1'>MADE WITH LOVE </Typography>

                                <Box sx={{ marginTop: "10%" }} >
                                    <Button sx={outlinedButton}>DISCOVER</Button>
                                </Box>

                            </Box>
                        </Container>
                    </Box>
                </SwiperSlide>
                {/* Add more slides as needed */}
            </Swiper>

            <Box sx={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
                padding: '3% 20px', // Adjusted padding
                backgroundColor: 'transparent', // Transparent background
                zIndex: '1000'
            }}>
                <Typography variant="h4" sx={{ color: 'beige', fontFamily: 'Belleza, sans-serif' }}>TÖBEL</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {navbarLinks.map((link, index) => (
                        <Button key={index} sx={{ color: 'beige', margin: '0 10px' ,fontSize:"1.2rem",}} href={link.href}>{link.title}</Button>
                    ))}
                </Box>
                <Button sx={{ color: 'beige' }} onClick={toggleDrawer(true)}>Menu</Button>
            </Box>
            <Drawer anchor='right' open={isDrawerOpen} onClose={toggleDrawer(false)} sx={{ '& .MuiDrawer-paper': { backgroundColor: 'black',padding:"4%", color: 'beige', textAlign:"center" } }}>
                <Box sx={{ width: 250 ,marginTop:"40%"}}>
                <Typography variant="h4" sx={{ color: 'beige', fontFamily: 'Belleza, sans-serif'}}>TÖBEL</Typography>
                <p>We make interiors infused with the spirit of contemporary design philosophies.</p>
                <p>A: Seestrasse 21, Zurich</p>
                <p>T: 00145288962</p>
                <div style={{ display: 'flex', flexDirection: 'column',marginTop:"60%" }}>
                        <p style={{ marginRight: '10px', marginBottom:"0px"}}>
                            <a href="https://www.instagram.com/your_instagram" target="_blank" rel="noopener noreferrer" style={linkStyle}>INSTAGRAM</a>
                        </p>
                        <p style={{ marginRight: '10px', marginBottom:"0px" }}>
                            <a href="https://www.facebook.com/your_facebook" target="_blank" rel="noopener noreferrer" style={linkStyle}>FACEBOOK</a>
                        </p>
                        <p style={{ marginRight: '10px', marginBottom:"0px" }}>
                            <a href="https://www.linkedin.com/your_linkedin" target="_blank" rel="noopener noreferrer" style={linkStyle}>LINKEDIN</a>
                        </p>
                    </div>

                </Box>
            </Drawer>

            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
        </Box>
    );
};

export default Slider;
