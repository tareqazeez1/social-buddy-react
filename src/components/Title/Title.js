import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import './Title.css';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Title = (props) => {

const {title,id}= props.post;

const history= useHistory();

const handleClick=(postId)=>{

    const url=`/posts/${postId}`
    history.push(url);
}

 return (
        <div className='border'>


            <Grid item xs={12}>
            <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
               

            <h4>Post Title</h4>
            <h2> {title}</h2>  
            <br></br>

            
            
            
            <Button onClick={()=>handleClick(id)} variant="contained" color="secondary">See More</Button>

            

         
            </Box>
            </Grid>          

           
        </div>
    );
};

export default Title;