import * as React from 'react';

// const holes =  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'];
const frontNine = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const backNine = ['10', '11', '12', '13', '14', '15', '16', '17', '18'];
const fakeParsFront = [4, 3, 4, 4, 3, 4, 4, 3, 5];
//will be populated or inputed by user
// const scores = ['']


function Card() {
  return(
    <div id="scorecard">
      <h1>Score Card</h1>
        <table>
          <tbody>
            <tr>
              <th>TEE</th>
              {frontNine.map((hole , i) => (
              <td key={i}>
                  <p>{hole}</p>
               </td>
              ))}
              <td className="spanner">OUT</td>
              {backNine.map((hole , i) => (
              <td key={i}>
                  <p>{hole}</p>
               </td>
              ))}
              <td>IN</td>
              <td>TOT</td>
            </tr>


            <tr>
              <th>YARDS</th>
              {frontNine.map((hole , i) => (
              <td key={i}>
                  <p>{hole}</p>
               </td>
              ))}
              <td className="spanner"></td>
              {backNine.map((hole , i) => (
              <td key={i}>
                  <p>{hole}</p>
               </td>
              ))}
            </tr>


            <tr>
              <th>PAR</th>
              {fakeParsFront.map((hole , i) => (
              <td key={i}>
                  <p>{hole}</p>
               </td>
              ))}
              <td className="spanner"></td>
              {backNine.map((hole , i) => (
              <td key={i}>
                  <p>{hole}</p>
               </td>
              ))}
            </tr>


            <tr>
              <th>HCP</th>
              {frontNine.map((hole , i) => (
              <td key={i}>
                  <p>{hole}</p>
               </td>
              ))}
              <td className="spanner"></td>
              {backNine.map((hole , i) => (
              <td key={i}>
                  <p>{hole}</p>
               </td>
              ))}
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default Card;
