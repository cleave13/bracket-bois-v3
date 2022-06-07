import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
const holes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'];

//will be populated or inputed by user
const scores = ['']

function createData(name, ...holes) {
  return { name, ...holes};
}
// const columns = 22;
const rows = [
  createData('Hole', ...holes),
//   createData('Blue', 237, 9.0, 37, 4.3),
//   createData('Dark Green', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
];


function Card() {
  return(
    <div>
      <h1>hi</h1>
        <table>
          <tbody>
            <th>holes</th>
            
            {holes.map((hole , i) => (
              <th key={i}>
                <td>{hole}</td>
              </th>
            ))}
            <th style={{color: "red"}}>initials</th>
            <tr>blue</tr>
          </tbody>
          
        </table>
    </div>
  )
}

export default Card;
