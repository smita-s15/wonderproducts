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
            gap: '10px',
            marginX: "auto",
            alignItems: 'center'
          }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginX:'auto', flexDirection:'column', gap:'10px', mt:'10px', mb:'-5px' }}  >
          <KeyboardArrowUpIcon
            sx={{ color: '#fff',  }}
            onClick={toggleDrawer(false)}
          />
          <NavLink to="AboutUs" onClick={toggleDrawer(false)}
            style={{ textDecoration: 'none', }}>
            <Typography color="#fff" >
              About Us
            </Typography>
          </NavLink>
          <Typography onClick={handleClickMblServices} color="#fff" sx={{ cursor: 'pointer', }}>
            Services  <br /> <KeyboardArrowDownIcon />
          </Typography>
        </Box>
        <Collapse in={openMblServices} timeout="auto" unmountOnExit  >
          {ServiceLinks.map((item, index) => {
            return <Box key={index} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30px', marginX:'auto', }}  >
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
            </Box>
          }
          )}
        </Collapse>
        
        {Arr?.map((item, index) => {
          return <Box key={index} sx={{ display: 'flex', justifyContent: 'center', marginX: 'auto', alignItems: 'center', flexDirection: 'column',  marginX:'auto',}}  >
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
        <NavLink to="/" sx={{ m: '30px' }} onClick={toggleDrawer(false)}>
          <img src={require("../../ui/assets/Navbar/logo.svg").default} alt="" />
        </NavLink>
      </SwipeableDrawer>
    </>
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
