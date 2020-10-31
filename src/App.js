// destructuring component and able to use Component in class component versus React.Component
import React, { Component } from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';
// import { DataGrid, RowsProp, ColDef } from '@material-ui/data-grid';



// class component
class App extends Component {
  constructor() {
    super();
    this.state = { employees: [] };
  }
  // api calls in this function (life cycle method)
  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=200&nat=us").then((response) => {
      this.setState({ employees: response.data.results });
    });
  }
  render() {
    return (
      <div className="App">
        {console.log(this.state.employees)}
        <div className="container">
          <div className="row header">
            <div className="col-12 d-flex justify-content-center">
              <h1>Employee Tracker</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <input className="searchBar" type="text" placeholder="Search.."></input>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <table>
                <thead>
                <tr>
                  <th>Profile Image</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                </tr>
                </thead>
                {this.state.employees.map((employee) => {
                  return (
                    <tbody>
                    <tr >
                    {/* key={employee.id.value.toString()} */}
                      <td><img src={employee.picture.thumbnail}></img></td>
                      <td>{employee.name.first}</td>
                      <td>{employee.name.last}</td>
                      <td>{employee.email}</td>
                      <td>{employee.cell}</td>
                    </tr>
                    </tbody>
                  )
                })}
              </table>

            </div>
          </div>
        </div>

      </div>
    )
  }
}

// sort function
// function ProductTable(props) {
//   const { products } = props;
//   let sortedProducts = [...products];
//   sortedProducts.sort((a, b) => {
//     if (a.name < b.name) {
//       return -1;
//     }
//     if (a.name > b.name) {
//       return 1;
//     }
//     return 0;
//   });
//   return (
//     <Table>
//       {/* as before */}
//     </Table>
//   );
// }
// https://www.smashingmagazine.com/2020/03/sortable-tables-react/



export default App;
