import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Backdrop, CircularProgress} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));


const Spinner = ({loading}) => {
  const classes = useStyles();
  
  return (
    <React.Fragment>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </React.Fragment>
  );
};

export default Spinner
