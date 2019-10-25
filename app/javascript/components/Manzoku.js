import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class Manzoku extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Button variant="contained" >Default</Button>
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
      </React.Fragment>
    );
  }
}

export default Manzoku
