/*import React from "react"
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

class IndexButtons extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Button variant="contained" color="pink">その１ボタン</Button>
        <Button variant="contained" color="inherit">その２ボタン</Button>
        <Button variant="contained"> Style直接指定したボタン</Button>
      </React.Fragment>
    );
  }
}
export default IndexButtons

*/

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

function ContainedButtons() {
  const classes = useStyles();
  //render: function() {
  render: {
    return (
      <div>
        <Button variant="contained" className={classes.button}>
          Default
      </Button>
        <Button variant="contained" color="primary" className={classes.button}>
          Primary
      </Button>
        <Button variant="contained" color="secondary" className={classes.button}>
          Secondary
      </Button>
        <Button variant="contained" color="secondary" disabled className={classes.button}>
          Disabled
      </Button>
        <Button variant="contained" href="#contained-buttons" className={classes.button}>
          Link
      </Button>
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" component="span" className={classes.button}>
            Upload
        </Button>
        </label>
      </div>
    );
  }
}