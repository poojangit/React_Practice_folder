import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

import React, { Component } from 'react';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Person from './components/Person';
import LifecycleA from './components/LifecycleA';
import Prac1 from './components/Prac1';
import Prac2 from './components/Prac2';
import Prac3 from './components/Prac3';


class App extends Component {
render () {
  return (
    <div className='App'>
      {/* <Counter/>
      <Message/> */}
      {/* <Greet name = "Pooja" heroName = "Artist"/> */}
      {/* <p>Heloooooooooooooooooooooooooooooooooo</p>
      <Greet name = "Preethi"/> */}
      {/* <Welcome name = "Preethi"/> */}
      {/* <Hello/> */}

      {/* <FunctionClick/>
      <ClassClick/> */}
      {/* <EventBind/> */}
      {/* <ParentComponent/> */}

      {/* <UserGreeting/> */}

      {/* <NameList/> */}
      {/* <Person/> */}

      {/* <LifecycleA/> */}

      {/* <Prac1/> */}
      {/* <Prac2/> */}
      <Prac3/>
    </div>
  )
}
}

export default App