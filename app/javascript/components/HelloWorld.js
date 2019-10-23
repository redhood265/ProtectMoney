import React from "react"
import PropTypes from "prop-types"
import Button from '@material-ui/core/Button'

class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        Reactコンポーネントの出力　Greeting: {this.props.greeting}
        <Button>Material-ui_Core_Button</Button>
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
