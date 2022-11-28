import Layout from "../Components/Layout";
import "../Assets/CSS/Pages/Messages.css"
import * as React from 'react';
import Container from '@mui/material/Container';

import { Avatar, Grid } from "@mui/material";
import { Fab } from '@mui/material';
import Images from '@mui/icons-material/InsertPhotoOutlined';

export default function Messages() {
    return (
        <Layout>
            <div className="Messages">
                <Container maxWidth="xl">
                    <Grid>
                        <Grid item xs={6} md={4}>
                            <div className="MessagesList">
                                <div className="keyChat">
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    <div className="keyChatInfo">
                                        <h3>John Doe</h3>
                                        <p>Hey, how are you?</p>
                                    </div>
                                    <div className="keyChatTime">
                                        <p>12:00</p>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6} md={8}>
                            <div className="Chat">
                                <div className="ChatHeader">
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    <div className="ChatHeaderInfo">
                                        <h3>John Doe</h3>
                                        <p>Last seen at 12:00</p>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    
                </Container>                 
            </div>
        </Layout>
    )
}