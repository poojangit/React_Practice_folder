import React from 'react';
import NameList from './NameList';

function Person({person}) {
  return (
    <div>
      <h1>Im {person.pName} . my id is {person.id}</h1>
    </div>
  );
}

export default Person;
