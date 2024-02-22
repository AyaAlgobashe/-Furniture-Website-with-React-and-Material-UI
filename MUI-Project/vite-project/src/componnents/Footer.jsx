import { Button, Grid, TextField } from '@mui/material';
import React from 'react';

const footerStyle = {
    backgroundColor: 'rgb(32, 31, 31)',
    color: '#fff',
    padding: '32px',
};

const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '16px',
    textAlign: "left",
    paddingLeft:"8%",
    paddingTop:"3%",

    
};

const inputStyle = {
    backgroundColor: '#555',
    borderRadius: '0px',
    marginBottom: '10px',
    width: "60%" ,
    borderColor:"rgb(32, 31, 31)"
};

const subscribeButtonStyle = {
    backgroundColor: '#f50057',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#d50000',
    },
};

const outlinedButton = {
    border: '1px solid beige',
    color: 'beige',
    height: "20%",
    width: "50%", // Adjusted width to occupy full space
    fontSize: "1rem", // Fixed typo here
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

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <Grid container spacing={1} sx={{ justifyContent: "center" }}>
                <Grid item xs={12} sm={6} md={3} style={columnStyle}>
                    <h1>TÖBEL</h1>
                    <p>We make interiors infused with the spirit of contemporary design and minimalist philosophies.</p>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <p style={{ marginRight: '10px' }}>
                            <a href="https://www.instagram.com/your_instagram" target="_blank" rel="noopener noreferrer" style={linkStyle}>INSTAGRAM</a>
                        </p>
                        <p style={{ marginRight: '10px' }}>
                            <a href="https://www.facebook.com/your_facebook" target="_blank" rel="noopener noreferrer" style={linkStyle}>FACEBOOK</a>
                        </p>
                        <p>
                            <a href="https://www.linkedin.com/your_linkedin" target="_blank" rel="noopener noreferrer" style={linkStyle}>LINKEDIN</a>
                        </p>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3} style={columnStyle}>
                    <h3>DESIGNERS</h3>
                    <p>Ivana Kostadinova</p>
                    <p>Italymobile</p>
                    <p>Sweden Int Arch.</p>
                    <p>France</p>
                </Grid>
                <Grid item xs={12} sm={6} md={3} style={columnStyle}>
                    <h3>FAQ</h3>
                    <p>Where can I find your catalog?</p>
                    <p>Can I make online purchases?</p>
                    <p>When can I visit your studio?</p>
                    <p>How long does shipping take?</p>
                </Grid>
                <Grid item xs={12} sm={6} md={3} style={columnStyle}>
                    <h3>SUBSCRIBE</h3>
                    <TextField
                        id="outlined-basic"
                        label="E-mail"
                        variant="outlined"
                        style={inputStyle}
                    />
                    <Button sx={outlinedButton}>
                        SUBMIT
                    </Button>
                </Grid>
            </Grid>
        </footer>
    );
};

export default Footer;
