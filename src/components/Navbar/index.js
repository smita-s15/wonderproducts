import { AppBar,Container,Toolbar} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { NavLink } from 'react-router-dom'



export const Navbar = () => {

  return (
    <AppBar position="static" sx={{ boxShadow: 'none', background: '#FFFFFF', padding: '10px', marginX:'auto' }} >
      <Container>
      <Toolbar >
        <Box flexGrow='1'>
        <NavLink to="/">
          <img src={require("../../ui/assets/Navbar/logo.svg").default} alt="" />
          </NavLink>
        </Box>
        <Toolbar>
          {Arr?.map((item, index) => {
            return <Box key={index} direction='row' >
              <NavLink
                style={({
                  fontFamily: "Overpass",
                  fontStyle: "normal",
                  fontSize: "15px",
                  lineHeight: "19px",
                  color: '#000',
                  textDecoration: 'none',
                  fontWeight: "600",
                  marginLeft: "40px"
                })} 
                to={item.link}
                >
                  {item.title}
                </NavLink>
            </Box>
          })}
        </Toolbar>
      </Toolbar>
      </Container>
    </AppBar>
  )
}

const Arr = [
  {
    title: 'About Us',
    link: '#'
  },
  {
    title: 'Services',
    link: '#'
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
    link: '#'
  },
  {
    title: 'Global Networks',
    link: '/Globals'
  },
]
