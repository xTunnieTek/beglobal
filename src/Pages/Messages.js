import Layout from "../Components/Layout";
import "../Assets/CSS/Pages/Messages.css"
import * as React from 'react';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { Avatar } from "@mui/material";
import { Fab } from '@mui/material';
import Images from '@mui/icons-material/InsertPhotoOutlined';



export default function Messages() {
    return (
        <Layout>
            <div className="Messages">
                <div className="Chat">
                    <div className="Name">
                        <h1>Chat</h1>
                    </div>
                </div>
                <div className="Profile">
                
                </div>
            </div>
        </Layout>
    )
}