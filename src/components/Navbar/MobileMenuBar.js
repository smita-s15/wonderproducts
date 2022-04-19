import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Collapse, IconButton, Typography, } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { NavLink } from 'react-router-dom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const MobileMenuBar = () => {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const [openMblServices, setOpenMblServices] = React.useState(false);
  const handleClickMblServices = () => {
    setOpenMblServices(!openMblServices);
  };

  return (
    <>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, display: { xs: 'block', lg: 'none', }, }} onClick={toggleDrawer(true)}
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
            background: "rgba( 19, 11, 70, 0.25 )",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur( 4px )",
            WebkitBackdropFilter: "blur( 4px )",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
            height: 'auto',
            borderRadius: '20px 20px 0 0',
            textAlign: 'center',
            gap:'20px',
            marginX:"auto",
            alignItems:'center'
          }
        }}
      >
          <KeyboardArrowUpIcon
            sx={{ color: '#fff', mt:'20px'}}
            onClick={toggleDrawer(false)}
          />
          <NavLink to="AboutUs" onClick={toggleDrawer(false)}
            style={{ textDecoration: 'none', }}>
            <Typography color="#fff" >
              About Us
            </Typography>
          </NavLink>
          <Typography onClick={handleClickMblServices} color="#fff" sx={{ cursor: 'pointer', }}>
            Services <br /> <br /> <KeyboardArrowDownIcon />
          </Typography>
          <Collapse in={openMblServices} timeout="auto" unmountOnExit>
            <Box >
              {ServiceLinks.map((item, index) => (
                <>
                  <NavLink 
                    key={index}
                    onClick={toggleDrawer(false)}
                    style={({
                      fontFamily: "Overpass",
                      fontStyle: "normal",
                      fontSize: "15px",
                      lineHeight: "19px",
                      color: '#fff',
                      textDecoration: 'none',

                    })}
                    to={item.link}
                  >
                    {item.title}
                  </NavLink>
                  <br /> 
                </>
              ))}
            </Box>
          </Collapse>
        
        {Arr?.map((item, index) => {
          return <Box key={index} sx={{ display: 'flex', justifyContent: 'center', marginX: 'auto', alignItems: 'center', flexDirection: 'column', }}  >
            <NavLink
              onClick={toggleDrawer(false)}
              style={({
                fontFamily: "Overpass",
                fontStyle: "normal",
                fontSize: "15px",
                lineHeight: "19px",
                color: '#fff',
                textDecoration: 'none',

              })}
              to={item.link}
            >
              {item.title}
            </NavLink>
          </Box>
        })}
        <NavLink to="/" sx={{mb:'20px'}}>
            <img src={require("../../ui/assets/Navbar/logo.svg").default} alt="" />
          </NavLink>
      </SwipeableDrawer>
    </>
  );
}

const Arr = [
  {
    title: 'About',
    link: '/AboutUs'
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


const ServiceLinks = [
  {
    title: 'Contract',
    link: '/Contract'
  },
  {
    title: 'Private-Label',
    link: '/Private'
  },
  {
    title: 'Turn-key Projects',
    link: '/TurnProject'
  },
]
