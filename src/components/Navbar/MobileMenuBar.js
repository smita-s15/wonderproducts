import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Collapse, Fade, IconButton, Typography, } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { NavLink } from 'react-router-dom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const MobileMenuBar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const openPop = Boolean(anchorEl);
  const id = openPop ? 'simple-popover' : undefined;

  // mbl services
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
            gap: '30px',
            padding: '30px'
          }
        }}
      >
        <Typography id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          open={open} color="#fff" sx={{ cursor: 'pointer' }}>
          Services <br /> <KeyboardArrowDownIcon />
        </Typography>
        <Collapse timeout="auto" unmountOnExit>
          <Box bgcolor='red'>
            {ServiceLinks.map((item, index) => (
              <NavLink key={index} to={item.url} onClick={toggleDrawer(false)}
              >
                {item.title}
              </NavLink>
            ))}
          </Box>
        </Collapse>

        {Arr?.map((item, index) => {
          return <Box key={index} sx={{ display: 'flex', justifyContent: 'center', marginX: 'auto', alignItems: 'center', flexDirection: 'column' }}  >
            <NavLink
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
