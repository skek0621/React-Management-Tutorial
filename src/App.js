import React from 'react';
import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';

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
      return(
        <div>
          {
            customers.map(c=>{
              return(
                <Customer
                  key={c.id}
                  id={c.id}
                  name={c.name}
                  image={c.image}
                  gender={c.gender}
                  birthday={c.birthday}
                  job={c.job}
                  />
              );
            })
          }
        </div>
      );
  }
}

export default App;
