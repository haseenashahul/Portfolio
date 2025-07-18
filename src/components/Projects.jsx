import React from 'react'
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';

const Projects = () => {
    const projects = [
        {
            name: "AI-Powered Shopping Space",
            description: "Smart shopping platform with AI & weather-based suggestions.",
            tech: "React, Node, Express, SQL"
        },
        {
            name: "Automated Hostel Mess Billing",
            description: "Web-based mess billing & management system.",
            tech: "Python, Django, SQLite"
        },
        {
            name: "Conference Management System",
            description: "Platform for abstract submission & event coordination.",
            tech: "Django, Bootstrap"
        },
        {
            name: "E-Voting System",
            description: "Online voting system ensuring transparency and accuracy.",
            tech: "PHP, MySQL"
        }
    ];

    return (
        <div>
            <Box sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom>Projects</Typography>
                <Grid container spacing={2}>
                    {projects.map((project, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6">{project.name}</Typography>
                                    <Typography variant="body2">{project.description}</Typography>
                                    <Typography variant="caption" display="block" mt={1}>Tech: {project.tech}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    )
}

export default Projects