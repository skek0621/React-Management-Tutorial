import React from 'react';
import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles'

const style = theme => ({
  root : {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table : {
    minWidth : 1080
  }
})

const customers = [
  {
  'id' : 1,
  'image': 'https://placeimg.com/64/64/any',
  'name' : '차현민',
  'birthday' : '950621',
  'gender' : '여자',
  'job' : '직장인'
  },
  {
  'id' : 2,
  'image': 'https://placeimg.com/64/64/1',
  'name' : '정현우',
  'birthday' : '870301',
  'gender' : '남자',
  'job' : '공무원'
  },
  {
    'id' : 3,
    'image': 'https://placeimg.com/64/64/2',
    'name' : '정지원',
    'birthday' : '930306',
    'gender' : '여자',
    'job' : '직장인'
  }
]

class App extends React.Component {
  render(){
    const {classes} = this.props;
      return(
        <div>
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableHead>
              <TableBody>
                {customers.map(c=>{return(<Customer key={c.id} id={c.id} name={c.name} image={c.image} gender={c.gender} birthday={c.birthday} job={c.job} />)})}
              </TableBody>
            </Table>
          </Paper>
        </div>
      );
  }
}

export default withStyles(style)(App);