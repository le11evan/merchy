import React from 'react';
import { CssBaseline, Button } from '@material-ui/core';
import merchy from '../../assets/merchy.png'
import useStyles from './Landingstyles/styles'
import {Link} from "react-router-dom";

const Landingpage = () => {
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <CssBaseline />
            <div className={classes.mainTitle}>
            <h1>
                Welcome to <br />
                <div className={classes.imageButton}>
                    <Button component={Link} to="/login" style={{background:'transparent', border: 'none'}}><img style={{width: '50vh', height: '50vh'}}src={merchy} alt="Merchy logo"/></Button>
                </div>
            </h1>
        </div>
        </div>
    )
}

export default Landingpage;