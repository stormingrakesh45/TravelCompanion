import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar ,Toolbar ,Typography,InputBase,Box} from '@mui/material';
import {SearchIcon} from '@mui/icons-material';
import useStyles from './style';

const Header = ()=>{
    
    const classes = useStyles();
    return (
        
        <AppBar position ="static">
            <Toolbar className = {classes.toolbar}>
                
                <Typography variant ="h5" className ={classes.title}>
                    Travel Companion
                </Typography>
                <Box display ="flex"></Box>
                <Typography variant ="h6"
                className={classes.title}>
                    Explore new places
                </Typography>
                
                {/* <Autocomplete>
                    <div
                        className={classes.search}>
                        <div className={classes.searchIcon}>
                            
                            <SearchIcon/>
                            
                            <InputBase placeholder="Search..."  classes={{root:classes.inputRoor,input:classes.inputInput}} />
                            
                        </div>
                    </div>
                </Autocomplete> */}
                
                 
            </Toolbar>
        </AppBar>
        
     )
}

export default Header;
