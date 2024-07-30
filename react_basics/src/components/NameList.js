import React from 'react';
import Person from './Person';
// function NameList() {
//   const names = ['pooja', 'preethi', 'pachu']
//   const nameList = names.map(name => <h2>{name}</h2>)
//   return (
//     <div>
//       {/* <h1>{names[0]}</h1>
//       <h2>{names[1]}</h2>
//       <h2>{names[2]}</h2> */}

//       {
//         nameList
//       }
//     </div>
//   );
// }

// export default NameList;

function NameList() {

  const persons = [
  {
    id : 1,
    pName : 'Pooja',
    age : 23,
    place : 'udupi'
  },
  {
    id : 2,
    pName : 'Pooja',
    age : 23,
    place : 'udupi'
  },
  {
    id : 3,
    pName : 'Pooja',
    age : 23,
    place : 'udupi'
  },
  ]
  // const personsList = persons.map(details => <h1>Im {details.pName} . my id is {details.id}</h1>)
 const personsList = persons.map(person => <Person person = {person}/>)
  return (
    <div>
      {personsList}
    </div>
  );
}

export default NameList;

