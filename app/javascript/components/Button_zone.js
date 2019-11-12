import React from "react"
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types"
import ReactDOM from 'react-dom';
import { Button } from "@material-ui/core";

export default class Button_zone extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container maxWidth="lg">
          <Button link="new_buy_item_path">aaaaa</Button>
        </Container>
      </React.Fragment>
    );
  }
}
