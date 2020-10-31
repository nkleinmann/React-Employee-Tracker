// destructuring component and able to use Component in class component versus React.Component
import React, { Component } from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';
// import { DataGrid, RowsProp, ColDef } from '@material-ui/data-grid';

// const ColDef {
//   /**
//    * The column identifier. It's used to match with [[RowData]] values.
//    */
//   field: string
// }

// const RowsProp = [
//   { id: 1, col1: 'Hello', col2: 'World' },
//   { id: 2, col1: 'XGrid', col2: 'is Awesome' },
//   { id: 3, col1: 'Material-UI', col2: 'is Amazing' },
// ];

// functional component
// function App() {
//   return (
// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
//   );
// }

// const rows: RowsProp = [
//   { id: 1, col1: employee.picture.thumbnail },
// ];

// const columns: ColDef[] = [
//   { field: 'col1', headerName: 'Profile Image', width: 150 }
// ];

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
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <h1>Employee Tracker</h1>
              </div>
          </div>
          <br />
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
            <table>
          <tr>
            <th>Profile Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
          {this.state.employees.map((employee) => {
            return (
              <tr>
                <td><img src={employee.picture.thumbnail}></img></td>
                <td>{employee.name.first}</td>
                <td>{employee.name.last}</td>
                <td>{employee.email}</td>
                <td>{employee.cell}</td>
              </tr>
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
       /* <DataGrid rows={rows} columns={columns} /> */
  // render() {
  //   {this.state.employees.map((employee) => {
  //     return (
  //       <div style={{height: 300, width: '100%' }}>
  //         <DataGrid columns={[{field: 'Profile Image'}]}
  //         rows={[
  //           {
  //             profile: employee.picture.thumbnail
  //           }
  //         ]}
  //         />
        
  //     </div>
  //     );
  //   })}
    
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
