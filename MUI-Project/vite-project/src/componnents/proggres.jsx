import React from 'react';
import { Grid, LinearProgress, Typography } from '@mui/material';

export const ProgressBars = () => {
    // Data for progress bars
    const progressData = [
        { label: 'BRAND', value: 90 },
        { label: 'ORIGINAL', value: 90 },
        { label: 'EXPERIENCE', value: 78 },
        { label: 'BRAND', value: 90 },
        { label: 'ORIGINAL', value: 90 },
        { label: 'EXPERIENCE', value: 78 },
    ];

    return (
        <Grid container sx={{ padding: "7%" }} spacing={2}>
            {/* <Typography sx={{
                fontStyle: "italic",
                paddingBottom: "7%",
                fontSize: "1.5rem",
            }} variant='p'>N e w</Typography> */}
            <Typography variant='h3' sx={{ textAlign: "left", width: "60%", fontFamily: "Belleza,sans-serif" }}>DRIVEN BY OUR OWN ORIGINAL SET OF VALUES</Typography>
            {progressData.map((item, index) => (
                <Grid  xs={12} 
                sm={6}  
                md={6}  
                lg={6}  key={index}>
                    <p style={{ textAlign: 'left', paddingLeft: '8px', paddingBottom: "0px", marginBottom: "0px" }}>{item.label}</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '8px', paddingRight: '8px' }}>
                        <LinearProgress
                            variant="determinate"
                            value={item.value}
                            color='inherit'
                            style={{ flexGrow: 1, backgroundColor: 'beige', height: "1px" }}
                        />
                        <p style={{ color: 'black', paddingLeft: '8px' }}>{item.value}%</p>
                    </div>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProgressBars;
