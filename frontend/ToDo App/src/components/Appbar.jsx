import { Button, Typography } from "@mui/material";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
function Appbar() {


  return <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ToDo App
        </Typography>
        <Button
          onClick={() => window.location = "/signin"}
          color="inherit">Login</Button>
        <Button
          onClick={() => window.location = "/signup"}

          color="inherit">SignUp</Button>
      </Toolbar>
    </AppBar>
  </Box>
}


export default Appbar
