import React from "react"
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from "prop-types"

const useStyles = makeStyles({
  root: {
    width: '70%',
    overflowX: 'auto',
  },
  table: {
    minWidth: '70%',
  },
});

var rows = []
var month_ary = []
function createData(category_name, name, price) {
  return { category_name:category_name, name:name, price:price };
}

function SimplTable_td(val) {

}

function SimplTable(val) {
  const classes = useStyles();
  console.log(val)
  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">

        <TableHead>
          {month_ary.buy_month }
        </TableHead>

        <TableHead>
          <TableRow bgcolor="#fff0f5">
            <TableCell align="center">カテゴリ名</TableCell>
            <TableCell align="center">商品名</TableCell>
            <TableCell align="center">金額</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell align="center">{row.category_name}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan="2" align="center">合計金額</TableCell>
            <TableCell align="center">{month_ary.month_price}</TableCell>
          </TableRow>

        </TableBody>
      </Table>
    </Paper>
  );
}

export default class Buy_Table extends React.Component {
  render() {
    var buy_ary = this.props.buy_ary
    var sum_ary = this.props.sum_ary
    var mount_key = this.props.mount_key
    
    mount_key.forEach((key) => {
      buy_ary[key].forEach((val) => {
        //console.log(val)
      })

      for(var num in sum_ary[key]) {
        console.log(num.buy_month)
      }
    })

    return (
      <React.Fragment>
        <Container maxWidth="lg">
          {<SimplTable val={this.props} />}
        </Container>
      </React.Fragment>
    );
  }
}
