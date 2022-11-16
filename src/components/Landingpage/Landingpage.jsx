import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { CssBaseline, IconButton } from '@material-ui/core';
import bg from '../../assets/bg.jpg'
import merchy from '../../assets/merchy.png'

const useStyles = makeStyles((theme) => ({
    background: {
        minHeight: '100vh',
        backgroundImage: `url(${bg})`,
        backgroundColor: 'transparent',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    },
    mainTitle: {
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: '100vh'
    },
    imageButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '200px',
        height: '100px',
        background: 'none'
        
    },
}))

const Landingpage = () => {
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <CssBaseline />
            <div className={classes.mainTitle}>
            <h1>
                Welcome to <br />
                <div className={classes.imageButton}>
                    <button style={{background:'transparent', border: 'none'}}><img style={{width: '50vh', height: '50vh'}}src={merchy} alt="Merchy logo"/></button>
                </div>
            </h1>
        </div>
        </div>
    )
}

export default Landingpage