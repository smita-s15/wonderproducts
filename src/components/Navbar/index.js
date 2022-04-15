import { AppBar, Container, Drawer, IconButton, Toolbar } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ServiceMenu from './servicemenu';
import   {MobileMenuBar}  from './MobileMenuBar';



export const Navbar = () => {


  return (
    <AppBar position="static" sx={{ boxShadow: 'none', background: '#ffffff', padding: '10px', marginX: 'auto',}} >
      <Toolbar variant="dense"  >
        <Box flexGrow='1'>
          <NavLink to="/">
            <img src={require("../../ui/assets/Navbar/logo.svg").default} alt="" />
          </NavLink>
        </Box>
        <Box flexDirection='row' sx={{ mr: 2, display: { xs: 'none', md:'none', lg: 'block' , xl:'block'}, justifyContent:'center', alignItems:'center' }}
        >
          <Toolbar >
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
              to='/AboutUs'
            >
              About Us
            </NavLink>
            <ServiceMenu />
            {Arr?.map((item, index) => {
              return <Box key={index}>
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
          </Toolbar>
        </Box>
        <MobileMenuBar />
      </Toolbar>
    </AppBar>
  )
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


export const Responsive = () => {
  const [open, setState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
  };
  return (
    <AppBar position="static" sx={{ boxShadow: 'none', background: '#FFFFFF', padding: '10px', marginX: 'auto' }} >
      <Toolbar >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer(true)}
          sx={{ mr: 2, display: { xs: 'block', sm: 'none', }, }}>
          <MenuIcon />
        </IconButton>
        <Drawer

          anchor="right" //from which side the drawer slides in

          variant="temporary" //if and how easily the drawer can be closed

          open={open} //if open is true, drawer is shown

          onClose={toggleDrawer(false)} //function that is called when the drawer should close

          onOpen={toggleDrawer(true)} //function that is called when the drawer should open
        >

        </Drawer>
      </Toolbar>
    </AppBar>
  )
}