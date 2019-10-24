import React from "react"
import PropTypes from "prop-types"
import Button from '@material-ui/core/Button'
import { PaperSheet } from './kami'

class HelloWorld extends React.Component {
  render() {
    return (
      <React.Fragment>
        {PaperSheet()}
        {/*
        Reactコンポーネントの出力　Greeting: {this.props.greeting}
        */}
        <Button variant="contained" color="primary">Material-UI</Button>
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
