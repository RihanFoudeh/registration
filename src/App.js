import "./App.css";
import * as React from "react";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import TagIcon from '@mui/icons-material/Tag';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import ContactsIcon from '@mui/icons-material/Contacts';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';

import DetailsIcon from '@mui/icons-material/Details';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import HistoryIcon from '@mui/icons-material/History';
import PreviewIcon from '@mui/icons-material/Preview';

const ar =[{"name":"CR number","icone":<TagIcon />},{"name":"General info","icone":<InfoIcon />},{"name":"Contacts","icone":<ContactsIcon />},{"name":"Product details","icone":<DetailsIcon />},{"name":"Financial details","icone":<LocalAtmIcon />},{"name":"Documents","icone":<DocumentScannerIcon />},{"name":"History","icone":<HistoryIcon />},{"name":"Preview and Submit","icone":<PreviewIcon />}]
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {ar.map((text, index) => (
          <ListItem key={text.name} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {text.icone }
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
      <Divider />
      <h4 style={{ marginLeft: "3em"}}>You finished 10% of the
application</h4>
      
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
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
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />











        <div className="Home">
          <div className="reg"  >
            <div>
              <h2 style={{ marginRight: "19em"}}>
                <span> 2</span>General info
              </h2>
            </div>

            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "70ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                style={{ sm: "35ch" }}
              />
            </Box>
            <div>
              <h2 style={{ marginRight: "12em"}}>General company information</h2>
            </div>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "35ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Company Name (English)"
                variant="outlined"
                style={{ display: "inline-list-item" }}
              />
              <TextField
                id="outlined-basic"
                label="Company Name (Arabic)"
                variant="outlined"
                // style={{ width: "35ch" }}
              />
            </Box>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "35ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Address"
                variant="outlined"
                style={{ width: "45ch" }}
              />
              <TextField
                id="outlined-basic"
                label="PO Box Address"
                variant="outlined"
                style={{ width: "25ch" }}
              />
            </Box>

            <div>
              <h2 style={{ marginRight: "19em"}}>Communication</h2>
            </div>

            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "35ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Mobile Number"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
              />
            </Box>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "72ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Email address"
                variant="outlined"
                // style={{ width: "40ch" }}
              />
              <br></br>
              <TextField
                id="outlined-basic"
                label="Website ( Optional )"
                variant="outlined"
              />
            </Box>

            <div>
              <h2 style={{ marginRight: "20em"}}> Vendor Type</h2>
            </div>

            <FormControl style={{ marginRight: "2em",width:'33cm',textAlign:'center' }} >
              <RadioGroup
                aria-labelledby="demo-form-control-label-placement"
                name="position"
                defaultValue="top"
                // sx={{ p: 2, border: "1px solid grey",width: '150px' }}
              >
                <Grid
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  <Grid xs={2} sm={4} md={4}>
                    <FormControlLabel
                    
                      value="start1"
                      control={<Radio />}
                      label="Small &  Medium
                      Enterprises"
                      labelPlacement="start"
                      sx={{ p: 1, border: "1px solid grey",width: '12em',height:'4em' }}
                      // style={{'border-style':"" }}
                    />
                    <FormControlLabel
                      value="start2"
                      control={<Radio />}
                      label="Trade"
                      labelPlacement="start"
                      sx={{ p: 1, border: "1px solid grey",width: '12em',height:'4em' }}
                    />
                    <FormControlLabel
                      value="start3"
                      control={<Radio />}
                      label="Manufacturer"
                      labelPlacement="start"
                      sx={{ p: 1, border: "1px solid grey",width: '11em',height:'4em' }}
                    />
                    <br></br> <br></br>
                    <FormControlLabel
                      value="start4"
                      control={<Radio />}
                      label="Contractor"
                      labelPlacement="start"
                      sx={{ p: 1, border: "1px solid grey",width: '12em',height:'4em' }}
                    />
                    <FormControlLabel
                      value="start5"
                      control={<Radio />}
                      label="Agent"
                      labelPlacement="start"
                      sx={{ p: 1, border: "1px solid grey",width: '12em',height:'4em' }}
                    />
                    <FormControlLabel
                      value="start6"
                      control={<Radio />}
                      label="Non Supplying
                      Manufacturer
                      "
                      labelPlacement="start"
                      sx={{ p: 1, border: "1px solid grey",width: '11em',height:'4em' }}
                    />

                  </Grid>
                </Grid>
              </RadioGroup>
            </FormControl>



          


   
              
            <Button variant="contained" style={{float:'right',width:'10em',height:'3em'}}>Next</Button>
            <h5 style={{float:'left'}}>Go Back</h5>

          </div>
        </div>
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
