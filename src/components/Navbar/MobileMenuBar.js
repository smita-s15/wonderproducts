import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton, Toolbar } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { textAlign } from '@mui/system';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import ServiceMenu from './servicemenu';

export const MobileMenuBar = () => {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


  return (
    <div>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, display: { xs: 'block', md:'block', lg: 'none', xl:'none' } }} onClick={toggleDrawer(true)}
      >
        <MenuIcon sx={{ color: 'black' }} />
      </IconButton>

      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box flexDirection='column' sx={{display:'flex', justifyContent:'flex-start', alignContent:'left', gap:'20px', m:'10px', padding:'100px '}} >
            <NavLink
              style={({
                fontFamily: "Overpass",
                fontStyle: "normal",
                fontSize: "15px",
                lineHeight: "19px",
                color: '#000',
                textDecoration: 'none',
                fontWeight: "500",
                marginLeft: "30px",
                flexWrap: 'wrap',
                textAlign:'left',
                margin:'10px'
              })}
              to='/AboutUs'
            >
              About Us
            </NavLink>
            <ServiceMenu  />
            {Arr?.map((item, index) => {
              return <Box key={index} >
                <NavLink
                  style={({
                    fontFamily: "Overpass",
                    fontStyle: "normal",
                    fontSize: "15px",
                    lineHeight: "19px",
                    color: '#000',
                    textDecoration: 'none',
                    fontWeight: "500",
                    marginLeft: "30px",
                    flexWrap: 'wrap'
                  })}
                  to={item.link}
                >
                  {item.title}
                </NavLink>
              </Box>
            })}
        </Box>

      </SwipeableDrawer>
    </div>
  );
}

const Arr = [
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

