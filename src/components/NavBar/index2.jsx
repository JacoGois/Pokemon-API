import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import { Link } from "react-router-dom";

export default function NavBar2({ pokemonFilter }) {
  return (
    <Box sx={{ flexGrow: 1 , marginBottom: "2em"}}>
      <AppBar position="static" sx={{backgroundColor: "black"}}>
        <Toolbar>
            <Box display="flex" justifyContent="space-between" width="100%" maxHeight="2.5em">
                <Link to={"/"}> <Box component="img" src='/assets/logo.png' height="8em" position="relative" top="-2.7em" /> </Link>
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
