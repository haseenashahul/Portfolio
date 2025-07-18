import React from 'react'
import { Box, Typography, Link } from '@mui/material';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';

const Contact = () => {
    return (
        <div>
            <Box sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom>Contact</Typography>
                <Typography><Email /> haseena628231@gmail.com</Typography>
                <Typography><LinkedIn /> <Link href="https://www.linkedin.com/in/haseena-s-5a51a5339" target="_blank">LinkedIn</Link></Typography>
                <Typography><GitHub /> <Link href="https://github.com/haseenashahul" target="_blank">GitHub</Link></Typography>
            </Box>
        </div>
    )
}

export default Contact