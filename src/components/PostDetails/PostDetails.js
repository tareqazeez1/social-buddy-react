  
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Comments from '../Comments/Comments';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    paper: {
        padding: theme.spacing(3),
        margin: 'auto',
        maxWidth: 'auto',
        marginTop:'50px',
        backgroundColor:'#3F51B5',
        color:'white',
        textAlign:'center',
        marginLeft:'20px',
        marginRight:'20px'
        
    },


}));

const PostDetails = () => {
    const { postId } = useParams();
    
    const [post, setPost] = useState({})
    const [comment,setComment]=useState([]);
    


    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`

        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))

    }, [])


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res=>res.json())
        .then(data=>setComment(data))


    },[])


    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={3}>

                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={3}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    <h1>{post.title}</h1>
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    <p>{post.body}</p>

                                   
                                </Typography>

                            </Grid>

                        </Grid>

                    </Grid>
                </Grid>
            </Paper>
            <br/>
           

            {
                comment.map(comment=> <Comments comment={comment}></Comments>)
            }

                   

            
        </div>
    );
};

export default PostDetails;