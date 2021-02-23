import React, {Fragment, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {makeStyles} from '@material-ui/styles';
import {Avatar, Backdrop, Box, CircularProgress, Grid, Paper} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
	height: '100vh',
  },
  backdrop: {
	zIndex: theme.zIndex.drawer + 1,
	color: '#fff',
  },
  spacer: {
	backgroundColor:
	  theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
  },
  image: {
	backgroundRepeat: 'no-repeat',
	backgroundColor:
	  theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	maxWidth: '50vw'
  }
}));


const PageWithLeftImage = ({image, Component, ...rest}) => {
  const classes = useStyles();
  const loading = useSelector(state => state.auth.loading);

  useEffect(() => {
    console.info('PageWithLeftImage useEffect');
  }, [loading]);

  return (
	<Grid container component='main' className={classes.root}>
	  <Fragment>
		<Grid item xs={false} sm={4} md={7} className={classes.image}>
		  <img src={image} alt={Component.name} />
		</Grid>
		<Box flexGrow={1} className={classes.spacer}/>
		<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
		  <Component {...rest}/>
		</Grid>
	  </Fragment>
	  <Backdrop className={classes.backdrop} open={loading}>
		<CircularProgress color='inherit' />
	  </Backdrop>
	</Grid>
  );
}

export default PageWithLeftImage;
