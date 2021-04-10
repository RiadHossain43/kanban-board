import React from 'react'
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../../assets/img/logo.svg';
import useStyles from '../../hooks/useStyles'
import { IconButton } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {Link} from 'react-router-dom'
import { 
    ViewModule,
    AccountCircle,
    ChatBubbleOutline
} from '@material-ui/icons';



const Navbar = ()=>{
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const menuId = 'primary-search-account-menu';
    const isMenuOpen = Boolean(anchorEl);
    const handleProfileMenuOpen = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    const UserMenu = (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          id={menuId}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem>My account</MenuItem>
          <MenuItem><Link className={classes.link} to='/signin' >Sign out</Link></MenuItem>
        </Menu>
    );

    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar> 
                <img className={classes.icon} src={Logo} alt='logo' height={20} />{" "}
                <Typography variant="h6" color="inherit" noWrap>
                    Kanban
                </Typography>
                <div className={classes.navItemContainer}>
                    <IconButton><ChatBubbleOutline/></IconButton>
                    <IconButton><ViewModule/></IconButton>
                    <IconButton onClick={handleProfileMenuOpen}><AccountCircle/></IconButton>
                </div>
                </Toolbar>
            </AppBar>
            {UserMenu}
        </>
    )
}

export default Navbar