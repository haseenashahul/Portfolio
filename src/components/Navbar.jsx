import React from 'react'
import { AppBar, Toolbar, Typography, Box, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static" color="primary" elevation={0} sx={{px:0}}>
      <Container maxWidth="xl" disableGutters>
        <Toolbar sx={{ justifyContent: 'space-between', px: 2 }}>
          <Link to='/'><Typography variant="h6" sx={{ fontWeight: 600,color:'white',textDecoration:'none' }}>Haseena S</Typography></Link>
          <Box>
            <Link to='/about'><Button color="inherit" sx={{color:'white'}}>About</Button></Link>
            <Link to='/skills'><Button color="inherit" sx={{color:'white'}}>Skills</Button></Link>
            <Link to='/experience'><Button color="inherit" sx={{color:'white'}}>Experience</Button></Link>
            <Link to='/projects'><Button color="inherit" sx={{color:'white'}}>Projects</Button></Link>
            <Link to='/contact'><Button color="inherit" sx={{color:'white'}}>Contact</Button></Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    )
}

export default Navbar