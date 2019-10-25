import React from "react"
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

class Manzoku extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Button variant="contained" style={{fontSize: '1.3em'}}>Default</Button>
        <Button variant="contained" style={{fontSize: '1.1em'}} color="Primary">Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
      </React.Fragment>
    );
  }
}

export default Manzoku
