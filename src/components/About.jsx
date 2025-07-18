import React from 'react'
import { Box, Typography } from '@mui/material';

const About = () => {
    return (
        <div>
            <Box id="about" sx={{ p: 4, backgroundColor: '#f9f9f9' }}>
                <Typography variant="h4" gutterBottom>About Me</Typography>
                <Typography>
                    I'm Haseena S, an MCA graduate with a strong interest in full stack development.
                    I enjoy building responsive web applications and learning new technologies.
                    Currently interning at Cellar Innovative Developers to gain real-world experience in modern web development.
                </Typography>
            </Box>
        </div>
    )
}

export default About