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
import RefsDemo from './components/RefsDemo';
import InputParentRef from './components/InputChildRef';
import FRParentRef from './components/FRParentRef';
import HoiClickCounter from './components/HoiClickCounter';
import HoiHoverCounter from './components/HoiHoverCounter';
import ClickCounterTwo from './components/RenderProps/ClickCounterTwo';
import HoverCounter from './components/RenderProps/HoverCounter';
import User from './components/RenderProps/User';
import CounterRender from './components/RenderProps/CounterRender';
import HookCounterFour from './Hook/HookCounterFour';
import MyForm from './components/FormHandling/MyForm';
import GreetProp from './components/props/GreetProp';
import ParentMethodCompo from './components/methodasprops/ParentMethodCompo';
import UserProp from './components/renderProps2/UserProp';
import HourRenderCounter from './components/renderProps2/HourRenderCounter';
import MessageState from './components/state/MessageState';
import CountReducer from './Hook/useReducer/CountReducer';


class App extends Component {
  render() {
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
        {/* <Prac3/> */}
        {/* <RefsDemo/> */}
        {/* <InputParentRef/> */}
        {/* < FRParentRef/> */}
        {/* <HoiClickCounter/> */}
        {/* <HoiHoverCounter/> */}
        {/* <ClickCounterTwo/>
      <HoverCounter/>
      <User name = {(isLoggedIn) =>  isLoggedIn ? 'guest' : 'pooja'}/>
       */}

        {/* <CounterRender
          render={(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount}/>
      )} 
      />
      <CounterRender
          render={(count, incrementCount) => (
            <HoverCounter count={count} incrementCount={incrementCount}/>
      )} 
      /> */}

      {/* <HookCounterFour/> */}
      {/* <MyForm/> */}

      {/* <GreetProp name = 'Pooja'>
        <p>I am children prop</p>
      </GreetProp> */}

      {/* <ParentMethodCompo/> */}
      {/* <UserProp name = {(isLoggedIn) => isLoggedIn ? 'Pooja' : 'Guest'}/> */}
     {/* <HourRenderCounter/> */}
     {/* <MessageState/> */}
     <CountReducer/>
      </div>
    )
  }
}

export default App