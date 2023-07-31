import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import QuizIcon from '@mui/icons-material/Quiz';
import { useNavigate } from 'react-router-dom';

const pages = ['LOGIN', 'REGISTER'];
const settings = ['Account', 'Performance', 'Logout'];

function ResponsiveAppBar() {

  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const theme = createTheme({
    palette: {
      primary: {
      main: '#03a9f4',
      darker: '#053e85',
    },
    secondary:{
      main:"#1e88e5",
      darker:"#1b5e20"
    }
  }});

  return (
    <ThemeProvider theme={theme}>
    <AppBar position="static" color='secondary'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <QuizIcon
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 110,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 1200,
              letterSpacing: '.3rem',
              color : 'inherit',
              textDecoration: 'none',
            }}
          >
            <b>QUIZ</b>
          </Typography>

          <Box sx={{ flexGrow: 3, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           
              <Button style={{fontSize:'20px', margin:"0"}}
              size='small'
                key="login"
                onClick={() => navigate('/login')}
                sx={{ my: 3, color: 'black', display: 'block',":hover": {
                  bgcolor: "#F4D160",
                  color: "black",
                }  }}
              >
                Login
              </Button>
              <Button style={{fontSize:'20px', margin:"0"}}
              size='small'
                key="register"
                onClick={() => navigate('/register')}
                sx={{ my: 3, color: 'black', display: 'block' ,":hover": {
                  bgcolor: "#F4D160",
                  color: "black",
                } }}
              >
                Register
              </Button>
              <Button style={{fontSize:'20px', margin:"0"}}
              size='small'
                key="admin"
                onClick={() => navigate('/admin')}
                sx={{ my: 3, color: 'black', display: 'block',":hover": {
                  bgcolor: "#F4D160",
                  color: "black",
                } }}
              >
                Admin
              </Button>
         
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '40px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{ 
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;