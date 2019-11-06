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
import ReactDOM from 'react-dom';

const useStyles = makeStyles({
  root: {
    width: '70%',
    overflowX: 'auto',
  },
  table: {
    minWidth: '70%',
  },
});

function createData(category_name, name, price) {
  return { category_name:category_name, name:name, price:price };
}

// function SimplTable() {
//   const classes = useStyles();

//   // this.props.buy_ary
//   // this.props.month_hash_key
//   console.log("month_hash_key => ")
//   console.log(this.props.month_hash_key)
//   console.log("buy_ary => ")
//   console.log(this.props.buy_ary)

//   // {month_hash_key.forEach((key) => {
//   //   buy_ary[key].forEach((val) => {
//   //     //console.log(val)
//   //   })
//   // })}

//   return (
//     { log(month_hash_key) }
  
//     <Paper className={classes.root}>
//       <Table className={classes.table} aria-label="simple table">

//         <TableHead>
//           {/*prop.month_ary.buy_month*/ }
//         </TableHead>

//         <TableHead>
//           <TableRow bgcolor="#fff0f5">
//             <TableCell align="center">カテゴリ名</TableCell>
//             <TableCell align="center">商品名</TableCell>
//             <TableCell align="center">金額</TableCell>
//           </TableRow>
//         </TableHead>

//         <TableBody>
//           {
//             /*{rows.map(row => (
//             <TableRow key={row.name}>
//               <TableCell align="center">{row.category_name}</TableCell>
//               <TableCell align="center">{row.name}</TableCell>
//               <TableCell align="center">{row.price}</TableCell>
//             </TableRow>
//           ))}
//           <TableRow>
//             <TableCell colSpan="2" align="center">合計金額</TableCell>
//             <TableCell align="center">{prop.month_ary.month_price}</TableCell>
//           </TableRow>*/
//           }

//         </TableBody>
//       </Table>
//     </Paper>
//   );
// }

function ListDataView(props) {

  console.log("this.props => ")
  console.log(props.month_hash_key)

  // リスト
  const listItems = props.month_hash_key.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

function TableDataView(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
        <TableRow bgcolor="#fff0f5">
          <TableCell align="center">カテゴリ名</TableCell>
          <TableCell align="center">商品名</TableCell>
          <TableCell align="center">金額</TableCell>
        </TableRow>
      </TableHead>
      {/* <TableBody>
        {props.buy_items_ary['this_month'].map(row => (
          <TableRow key={row.name}>
            <TableCell align="center">{row.category_id}</TableCell>
            <TableCell align="center">{row.name}</TableCell>
            <TableCell align="center">{row.price}</TableCell>
          </TableRow>
        ))} 
      </TableBody>*/}
      {props.month_hash_key.map(a_key => (
          <Table_Body_func buy_items_ary={props.buy_items_ary[a_key]}/>
      ))}
      </Table>
    </Paper> 
  );
}

// テーブルのBODY要素を関数化
function Table_Body_func(props) {
  return(
    <TableBody>
      {props.buy_items_ary.map(row => (
        <TableRow key={row.name}>
          <TableCell align="center">{row.category_id}</TableCell>
          <TableCell align="center">{row.name}</TableCell>
          <TableCell align="center">{row.price}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}

export default class Buy_Table extends React.Component {
  render() {
    console.log(this.props)
    console.log(this.props.month_hash_key)
    console.log(this.props.buy_items_ary.this_month)
    return (
      <React.Fragment>
        <Container maxWidth="lg">
          {/*<SimplTable />
          <ListDataView buy_items_ary={this.props.buy_items_ary} month_hash_key={this.props.month_hash_key} />*/}
          <TableDataView buy_items_ary={this.props.buy_items_ary} month_hash_key={this.props.month_hash_key}/>
        </Container>
      </React.Fragment>
    );
  }
}
