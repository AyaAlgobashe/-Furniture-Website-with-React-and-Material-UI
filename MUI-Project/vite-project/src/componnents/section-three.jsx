import { Box } from '@mui/material';
import React, { useState } from 'react';

const SectionThree = () => {
  const containerStyle = {
    width: '100%',
    position: "relative",
    overflow: "hidden"
  };

  const [isHovered, setIsHovered] = useState(false);

  const textStyle = {
    fontSize: "30px",
    position: "absolute",
    top: "50%",
    left: "50%",
    color: "#fff", 
    borderRadius: "50%",
    border: "1px solid beige", 
    padding:"8%",
    transition: "border-radius 0.5s, transform 0.5s", 
    cursor: "pointer", 
    transform: isHovered ? "translate(-50%, -50%) rotate(360deg)" : "translate(-50%, -50%)" 
  };
  const imgStyle={
    width: "100%", 
    height: "auto", 
    display: "block",
  }

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div style={containerStyle}>
      <Box>
        <img sx={imgStyle} src='https://tobel.qodeinteractive.com/wp-content/uploads/2021/06/Home-2-video-img-1536x560.jpg' alt="Background" />
        <p 
          style={textStyle} 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          PLAY
        </p>
      </Box>
    </div>
  );
};

export default SectionThree;
