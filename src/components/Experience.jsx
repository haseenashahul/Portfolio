import React from 'react'
import { Box, Typography, Paper } from '@mui/material';

const Experience = () => {
    return (
        <div>
            <Box id="experience" sx={{ p: 4, backgroundColor: '#f5f5f5' }}>
                <Typography variant="h4" gutterBottom>Experience</Typography>
                <Paper sx={{ p: 3, mb: 2 }}>
                    <Typography variant="h6">Software Developer Intern</Typography>
                    <Typography variant="subtitle1">Cellar Innovative Developers, Aluva</Typography>
                    <Typography variant="body2" color="text.secondary">Jan 2025 – Present</Typography>
                    <ul>
                        <li>Hands-on experience in developing web applications using React and Node.js</li>
                        <li>Improved problem-solving and team collaboration skills</li>
                        <li>Contributed to real-world software projects in an Agile environment</li>
                    </ul>
                </Paper>
            </Box>
        </div>
    )
}

export default Experience