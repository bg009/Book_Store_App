import React , {useState} from 'react'
import {AppBar ,Toolbar, Tab , Tabs, Typography} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {NavLink} from 'react-router-dom';

const Header = () => {

  const [value , setValue] = useState();

  return (
    <div>
      <AppBar style={{backgroundColor : '#232F3D'}} position='sticky'>

        <Toolbar>
          <NavLink to='/' sx={{color : "white"}}>
            <Typography>
                
                    <MenuBookIcon />
                
            </Typography></NavLink>
            <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >    
                <Tab  LinkComponent={NavLink} to='/add'  label = "Add product" />
                <Tab LinkComponent={NavLink} to='/Books' label = "Books" />
                <Tab LinkComponent={NavLink} to='/About' label = "About Us" />
                
            </Tabs>


        </Toolbar>
        
      </AppBar>



    </div>
  )
}

export default Header
