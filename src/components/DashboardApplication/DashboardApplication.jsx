import { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, CssBaseline, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import DashboardAppData from '../DashboardAppData/DashboardAppData';
import './DashboardApplication.css';

const drawerWidth = 180;

function DashboardApplication(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("../data.json")
      .then(res => res.json())
      .then(data => setData(data))
  }, []);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar style={{ fontSize: "10px", fontWeight: "700", color: "#b8b7b9", letterSpacing: "1px" }}>CATEGORIES</Toolbar>
      <Typography className='catagories' variant="p" style={{ color: "#3c3a39", paddingLeft: "23px" }} noWrap component="div">
        <small className='catagori-list'>AI/Machine Learning</small>
      </Typography>
      <Typography className='catagories' variant="p" style={{ color: "#3c3a39", paddingLeft: "23px" }} noWrap component="div">
        <small className='catagori-list'>Application Runtime</small>
      </Typography>
      <Typography className='catagories' variant="p" style={{ color: "#3c3a39", paddingLeft: "23px" }} noWrap component="div">
        <small className='catagori-list'>Big Data</small>
      </Typography>
      <Typography className='catagories' variant="p" style={{ color: "#3c3a39", paddingLeft: "23px" }} noWrap component="div">
        <small className='catagori-list'>Cloud Provider</small>
      </Typography>
      <Typography className='catagories' variant="p" style={{ color: "#3c3a39", paddingLeft: "23px" }} noWrap component="div">
        <small className='catagori-list'>Database</small>
      </Typography>
      <Typography className='catagories' variant="p" style={{ color: "#3c3a39", paddingLeft: "23px" }} noWrap component="div">
        <small className='catagori-list'>Developer Tools</small>
      </Typography>
      <Typography className='catagories' variant="p" style={{ color: "#3c3a39", paddingLeft: "23px" }} noWrap component="div">
        <small className='catagori-list'>Drivers and plugins</small>
      </Typography>
      <Typography className='catagories' variant="p" style={{ color: "#3c3a39", paddingLeft: "23px" }} noWrap component="div">
        <small className='catagori-list'>Integration & Delivery</small>
      </Typography>
      <Typography className='catagories' variant="p" style={{ color: "#3c3a39", paddingLeft: "23px" }} noWrap component="div">
        <small className='catagori-list'>Logging & Tracing</small>
      </Typography>
      <Typography className='catagories' variant="p" style={{ color: "#3c3a39", paddingLeft: "23px" }} noWrap component="div">
        <small className='catagori-list'>Monitoring</small>
      </Typography>
      <Typography className='catagories' variant="p" style={{ color: "#3c3a39", paddingLeft: "23px" }} noWrap component="div">
        <small className='catagori-list'>Networking</small>
      </Typography>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{ background: "#fff" }}>
          <IconButton
            color="inherit"
            style={{ background: "#bbb" }}
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="p" style={{ color: "black" }} noWrap component="div">
            <span style={{ fontSize: "16px", color: "#70706b", letterSpacing: "1px" }}> {data.length}</span> <span style={{ fontSize: "10px", fontWeight: "700", color: "#b8b7b9", letterSpacing: "1px" }}>ITEMS</span>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <DashboardAppData />
      </Box>
    </Box>
  );
}

DashboardApplication.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  // window: PropTypes.func,
};

export default DashboardApplication;
