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
function createData(category_name, name, price) {
  return { category_name:category_name, name:name, price:price };
}

var sum_rows = [-1]
function price_sum(tmp) {
  var tmp_num = 0
  for (var i of tmp) {
    tmp_num = tmp_num + parseInt(i.price)
  }
  sum_rows[0] = tmp_num
}

function SimplTable() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          201909
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
            <TableCell colspan="2" align="center">合計金額</TableCell>
            <TableCell align="center">{sum_rows[0]}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}

export default class Buy_Table extends React.Component {
  render() {
    for (var i of this.props.buy_ary) {
      rows.push(createData(i[0], i[1], i[2]))
    }
    price_sum(rows)

    return (
      <React.Fragment>
        <Container maxWidth="lg">
          <SimplTable />
        </Container>
      </React.Fragment>
    );
  }
}
