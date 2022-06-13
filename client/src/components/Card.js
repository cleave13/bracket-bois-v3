import * as React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_COURSE_HOLES } from '../utils/queries'

// const holes =  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'];
const frontNine = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const backNine = ['10', '11', '12', '13', '14', '15', '16', '17', '18'];

const fakeFrontYards = [418, 235, 366, 434, 204, 327, 362, 195, 542];
const fakeBackYards = [368, 457, 145, 450, 379, 423, 590, 201, 396];

const fakeFrontOut = fakeFrontYards.reduce(function(a, b) {
  return a +b;
}, 0);

const fakeFrontIn = fakeBackYards.reduce(function(a,b) {
  return a + b;
}, 0);

const fakeTot = fakeFrontOut + fakeFrontIn;


const fakeParsFront = [4, 3, 4, 4, 3, 4, 4, 3, 5];
const fakeParsBack = [4, 4, 3, 5, 4, 4, 5, 3, 4];

const fakeFrontParsOut = fakeParsFront.reduce(function(a,b) {
  return a + b;
}, 0);

const fakeBackParsIn = fakeParsBack.reduce(function(a, b) {
  return a + b;
}, 0);

const fakeParsTot = fakeBackParsIn + fakeFrontParsOut;


//will be populated or inputed by user
// const scores = ['']


function Card() {

  const { courseId } = useParams();

  const { loadingHoles, data: holeData } = useQuery(QUERY_COURSE_HOLES, {
      fetchPolicy: "no-cache",
      variables: {courseId: courseId}
  });

  const allHoles = holeData?.course.holes

  console.log(allHoles);

  
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
              {fakeFrontYards.map((hole , i) => (
              <td key={i}>
                  <p>{hole}</p>
               </td>
              ))}
              <td className="spanner">{fakeFrontOut}</td>
              {fakeBackYards.map((hole , i) => (
              <td key={i}>
                  <p>{hole}</p>
               </td>
              ))}
              <td>{fakeFrontIn}</td>
              <td>{fakeTot}</td>
            </tr>


            <tr>
              <th>PAR</th>
              {fakeParsFront.map((hole , i) => (
              <td key={i}>
                  <p>{hole}</p>
               </td>
              ))}
              <td className="spanner">{fakeFrontParsOut}</td>
              {fakeParsBack.map((hole , i) => (
              <td key={i}>
                  <p>{hole}</p>
               </td>
              ))}
              <td>{fakeBackParsIn}</td>
              <td>{fakeParsTot}</td>
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
