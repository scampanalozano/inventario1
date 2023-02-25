import React, {Component} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import '../App.css';

export default class Preloader extends Component{

    constructor(){
        super();
        
    }

    render(){
        return(
            <Box sx={{ display: 'flex', width: 80, margin: '0 auto', marginTop: '20%' }}>
                <CircularProgress />
            </Box>
        )
    }
}
