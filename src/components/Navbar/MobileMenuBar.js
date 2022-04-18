import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton, makeStyles, Toolbar } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { bgcolor, textAlign } from '@mui/system';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import ServiceMenu from './servicemenu';


export const MobileMenuBar = () => {
  const [open, setOpen] = React.useState(false);


  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


  return (
    <>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, display: { xs: 'block', lg: 'none', },  }} onClick={toggleDrawer(true)}
      >
        <MenuIcon sx={{ color: 'black' }} />
      </IconButton>
      

      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            bgcolor: '#02153d',
            opacity: '0.7'
          }
        }}
      >
        <Box flexDirection='column' sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', gap: '10px', }}  >
          {Arr?.map((item, index) => {
            return <Box key={index}  sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', marginX: 'auto', padding: '10px' }}  >
              <NavLink
                style={({
                  fontFamily: "Overpass",
                  fontStyle: "normal",
                  fontSize: "15px",
                  lineHeight: "19px",
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontWeight: "500",
                  border: '1px solid #AEB0B5',
                  borderRadius: '5px',
                  textAlign: 'center',
                  padding:'5px',
                  width:'130px'
                })}
                to={item.link}
              >
                {item.title}
              </NavLink>
            </Box>
          })}
        </Box>

      </SwipeableDrawer>
    </>
  );
}

const Arr = [
  {
    title: 'About Us',
    link: '/About'
  },
  {
    title: 'Categories',
    link: '/Categories'
  },
  {
    title: 'Packaging',
    link: '/Packaging'
  },
  {
    title: 'Clients',
    link: '/Client'
  },
  {
    title: 'Contact Us',
    link: '/Contact'
  },
  {
    title: 'Locations',
    link: '/Location'
  },
  {
    title: 'Global Networks',
    link: '/Globals'
  },
]

