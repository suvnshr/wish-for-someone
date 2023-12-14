import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Fab } from '@mui/material';
import { AutoFixHigh, Star } from '@mui/icons-material';




function RootAppBar(props) {
  return (
    <Box sx={{ display: 'flex', mb: 12 }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            className="neon-text"
            sx={{ flexGrow: 1 }}
          >
            Wish for someone!
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Fab variant="extended" size="large" color="primary">
              <AutoFixHigh sx={{ mr: 1 }} />
              <Box sx={{ mt: 0.5 }}>
                Wish
              </Box>
            </Fab>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default RootAppBar;
