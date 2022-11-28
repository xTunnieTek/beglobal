import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Sidebar from './Sidebar';
import Avatar from '@mui/material/Avatar';
import Logo from '../Assets/Images/logoBe.png';
import '../Assets/CSS/Global.css';


export default function Layout({children}) {
  return (
    <React.Fragment>
      <CssBaseline />
        <Grid container spacing={2}>
            <Grid item md={12} xs={12}>
                <div className="header">
                    <img src={Logo} alt="Logo" className="logo" />
                </div>
            </Grid>
            <Grid item md={2}>
                <Sidebar />
            </Grid>
            <Grid item md={10} xs={12} >
                <div className="content">
                    {children}
                </div>
            </Grid>
            <Grid item md={12} xs={12}>
                <div className="footer">
                <Button><i class="fa-solid fa-infinity"></i></Button>
                <Button><i class="fa-solid fa-earth-asia"></i></Button>
                <Button><i class="fa-brands fa-rocketchat"></i></Button>
                {/* <Button><i class="fa-solid fa-user"></i></Button> */}
                <Button>
                <Avatar alt="Tuan" src="/static/images/avatar/1.jpg" />
                </Button>
                </div>
            </Grid>
        </Grid>
    </React.Fragment>
  );
}