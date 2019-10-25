import React from "react"
import PropTypes from "prop-types"
import Manzoku from "./Manzoku"
import SimpleTable from "./Tbl_sam"
import Container from '@material-ui/core/Container';

class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Container maxWidth="lg">
          Greeting: {this.props.greeting}
          <br />
          <Manzoku />
          <SimpleTable></SimpleTable>
        </Container>
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
