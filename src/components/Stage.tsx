import { Box, Button, Drawer, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const Stage: React.FC = () => {

    const [isDrawerOpen, setDrawerOpen] = useState(false);

    // Handle open/close of the drawer
    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    const placeHolderText = Array.from({ length: 100 }, (_, index) => (
            <>
            <p>Main content goes here...</p>
            <p>More content...</p>
            <p>Even more content...</p>
            </>
        ));
  return (
    <div className="stage">
      <div className="stage-header">
        <button className="left-button">Left Button</button>
        <button className="right-button">Right Button</button>
      </div>
      
      <div className="stage-body">
        <Button variant="contained" color="primary" onClick={toggleDrawer(true)}>
          Open Docked Panel
        </Button>
        {placeHolderText}
      </div>
      {/* Drawer from the right */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{
            width: 800,
            paddingLeft: 2,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* Close button */}
          
          
          <IconButton
            onClick={toggleDrawer(false)}
            sx={{
              position: 'absolute',
              top: '3px',
              right: '12px',
              zIndex: 1, // Ensure it's on top of the drawer content
            }}
          >
            <CloseRoundedIcon />
          </IconButton>

          {/* Drawer content */}
           <Box sx={{ flexGrow: 1, overflowY: 'auto', paddingTop:"15px"}}>
            <Typography variant="h6" gutterBottom>
              Docked Panel
            </Typography>
            <Typography variant="body2">
              This is a docked panel that slides in from the right. 
              {placeHolderText}
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
};

export default Stage;
