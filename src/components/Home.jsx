import React from 'react'
import { Box, Typography } from '@mui/material';
import Experience from './Experience';
import Projects from './Projects';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            
            <Box sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h3">Hi, I'm Haseena S</Typography>
                <Typography variant="h5" color="text.secondary">
                    Aspiring Full Stack Developer | MCA Graduate
                </Typography>
                <Typography mt={2}>
                    Passionate about developing web applications, solving problems, and learning new technologies.
                </Typography>
            </Box>
            <About/>
            <Experience/>
            <Projects/>
            <Skills/>
            <Contact/>

        </div>
    )
}

export default Home