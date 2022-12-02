import Layout from "../Components/Layout";
import "../Assets/CSS/Pages/Post.css"
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Avatar } from "@mui/material";
import TextareaAutosize from '@mui/material/TextareaAutosize';
// import IconButton from '@mui/material/IconButton';
import Love from '@mui/icons-material/FavoriteBorder';
// import Loved from '@mui/icons-material/Favorite';


import { Fab } from '@mui/material';
import Images from '@mui/icons-material/InsertPhotoOutlined';
import Link from '@mui/icons-material/Inventory2Outlined';
import FB from '@mui/icons-material/FacebookOutlined';
import IG from '@mui/icons-material/Instagram';

import Post from "../Assets/Images/Cloud/Jisoo.jpg";

export default function Global() {
    const [open, setOpen] = React.useState(false);
    const [fullWidth] = React.useState(true);
    const [maxWidth] = React.useState('md');
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Layout>
        <div className="Global">
            {/* <div className="ToolPost">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Button variant="outlined" onClick={handleClickOpen}>
                    What's on your mind?
                </Button>    
            </div> */}
            <Dialog onClose={handleClose} fullWidth={fullWidth} maxWidth={maxWidth} open={open}>
                <DialogTitle color={'#E94057'}>Create Post</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Hi Remy Sharp,
                </DialogContentText>
                <form>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={5}
                        placeholder="What's on your mind?"
                        autoFocus
                        margin="normal"
                        id="post"
                        label="My Post"
                        type="textarea"
                        fullWidth
                        variant="outlined"
                        style={{ width: '100%', height: '100%', border: '1px solid #dedede', outline: 'none', resize: 'none', fontSize: '1rem', padding: '1rem', fontFamily: 'Roboto', borderRadius: '5px' }}
                    />
                    <div className="files">
                        <Fab sx={{ bgcolor: '#FFF', color: '#F27121'}} aria-label="images">
                            <Images />
                        </Fab>
                        <Fab sx={{ bgcolor: '#FFF', color: 'secondary', margin:2 }} aria-label="file">
                            <Link />
                        </Fab>
                        <Fab sx={{ bgcolor: '#FFF', color: '#2374E1'}} aria-label="fb">
                            <FB />
                        </Fab>
                        <Fab sx={{ bgcolor: '#FFF', color: '#E94057', margin:2 }} aria-label="ig">
                            <IG />
                        </Fab>
                    </div>
                </form>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} sx={{ color:'#E94057', border: '1px solid #E94057',
                    '&:hover': {
                        backgroundColor: '#E94057',
                        color: '#FFF',
                        border: '1px solid #E94057',
                    },
                }} variant="outlined">Cancel</Button>
                    <Button onClick={handleClose} 
                    variant="contained"
                    sx={{ bgcolor: '#E94057',
                        '&:hover': {
                            backgroundColor: '#942837',
                            color: '#FFF',
                        },
                }}
                >Post</Button>
                </DialogActions>
            </Dialog>
            {/* NewFeed */}
            <div className="NewFeed">
                <div className="ToolPost">
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Button variant="outlined" onClick={handleClickOpen}>
                        What's on your mind?
                    </Button>    
                </div>
                <div className="Post">
                    <div className="PostHeader">
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        <div className="PostHeaderInfo">
                            <h3>Jisoo</h3>
                            <p>Today at 5:42 PM</p>
                        </div>
                    </div>
                    <div className="PostBody">
                        <p>Tự nhiên nhớ ra là tuần sau là tuần cuối để nộp bài rồi, huhu</p>
                        <img className="postImages" src={Post} alt="Post" />
                    </div>
                    <div className="PostFooter">
                        <Fab aria-label="love" sx={{ color: '#e94057','&:hover': {color: '#942837',}}}>
                            <Love />
                        </Fab>
                        <Button >
                            Comment
                        </Button>  
                    </div>
                </div>

                <div className="Post">
                    <div className="PostHeader">
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        <div className="PostHeaderInfo">
                            <h3>Remy Sharp</h3>
                            <p>Today at 5:42 PM</p>
                        </div>
                    </div>
                    <div className="PostBody">
                        <p>Hi, I'm Remy Sharp. I'm a software engineer and I'm passionate about building great software. I have a lot of experience building web applications using React, Node, and GraphQL. I'm currently looking for a new role and am open to a wide range of opportunities. If you'd like to chat about a potential role, please reach out!</p>
                        
                    </div>
                </div>

                <div className="Post">
                    <div className="PostHeader">
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        <div className="PostHeaderInfo">
                            <h3>Remy Sharp</h3>
                            <p>Today at 5:42 PM</p>
                        </div>
                    </div>
                    <div className="PostBody">
                        <p>Hi, I'm Remy Sharp. I'm a software engineer and I'm passionate about building great software. I have a lot of experience building web applications using React, Node, and GraphQL. I'm currently looking for a new role and am open to a wide range of opportunities. If you'd like to chat about a potential role, please reach out!</p> 
                    </div>
                </div>

                <div className="Post">
                    <div className="PostHeader">
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        <div className="PostHeaderInfo">
                            <h3>Remy Sharp</h3>
                            <p>Today at 5:42 PM</p>
                        </div>
                    </div>
                    <div className="PostBody">
                        <p>Hi, I'm Remy Sharp. I'm a software engineer and I'm passionate about building great software. I have a lot of experience building web applications using React, Node, and GraphQL. I'm currently looking for a new role and am open to a wide range of opportunities. If you'd like to chat about a potential role, please reach out!</p> 
                    </div>
                </div>

                <div className="Post">
                    <div className="PostHeader">
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        <div className="PostHeaderInfo">
                            <h3>Remy Sharp</h3>
                            <p>Today at 5:42 PM</p>
                        </div>
                    </div>
                    <div className="PostBody">
                        <p>Hi, I'm Remy Sharp. I'm a software engineer and I'm passionate about building great software. I have a lot of experience building web applications using React, Node, and GraphQL. I'm currently looking for a new role and am open to a wide range of opportunities. If you'd like to chat about a potential role, please reach out!</p> 
                    </div>
                </div>
            </div>
        </div>
        </Layout>
    );
}
