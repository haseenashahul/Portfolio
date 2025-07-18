import React from 'react'
import { Box, Typography, Chip, Grid } from '@mui/material';

const Skills = () => {
    const skills = {
        Languages: ['HTML', 'CSS', 'JavaScript', 'Python', 'C', 'Java'],
        Frameworks: ['React.js', 'Node.js', 'Express.js', 'Bootstrap', 'Django'],
        Databases: ['MySQL', 'SQLite'],
        Tools: ['GitHub', 'VS Code']
    };
    return (
        <div>
            <Box id="skills" sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom>Skills</Typography>
                {Object.entries(skills).map(([category, items], index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                        <Typography variant="h6">{category}</Typography>
                        <Grid container spacing={1}>
                            {items.map((skill, i) => (
                                <Grid item key={i}>
                                    <Chip label={skill} color="primary" />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                ))}
            </Box>
        </div>
    )
}

export default Skills