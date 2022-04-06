import { AppBar,Toolbar} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { NavLink } from 'react-router-dom'



export const Navbar = () => {

  return (
    <AppBar position="static" sx={{ boxShadow: 'none', background: '#fff', padding: '10px', marginX:'auto' }}>
      <Toolbar >
        <Box flexGrow='1'>
          <img src={require("../../ui/assets/Navbar/logo.svg").default} alt="" />
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
                  fontWeight: "800",
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
    link: '#'
  },
  {
    title: 'Packaging',
    link: '#'
  },
  {
    title: 'Clients',
    link: '#'
  },
  {
    title: 'Contact Us',
    link: '#'
  },
  {
    title: 'Locations',
    link: '#'
  },
  {
    title: 'Global Networks',
    link: '#'
  },
]
