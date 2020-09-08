import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from'./components/Greet';
import Welcome from'./components/Welcome';
import Hello from'./components/Hello';
import Message from'./components/Message';
import Counter from'./components/Counter';
import FunctionClick from'./components/FunctionClick';
import EventBind from'./components/EventBind';
import ParentComponent from'./components/ParentComponent'
import Stylesheet from'./components/Stylesheet'
import Inline from'./components/Inline'
import './appStyle.css'
import styles from'./appStyles.module.css'
import UserGreetings from'./components/UserGreeting'
import NameList from './components/NameList';
import Practice from './components/Practice';

function App() {
  return (
    <div className="App">
      <Practice/>
      {/*<NameList />*/}
     {/* <UserGreetings />*/}
     {/* <h1 className='error'>Amrit</h1>*/}
     {/* <h1 className={styles.success}>Success</h1>*/}
     {/*<Inline />*/}
     {/* <Stylesheet primary={true} />*/}
     {/* <ParentComponent />*/}
     {/* <EventBind />*/}
     {/* <FunctionClick />*/}
     {/* <Counter />*/}
     {/* <Message />*/}
{/*<Greet name='Amrit' heroName="Superman"> <p> This is children</p>
</Greet> 

<Greet name='Ankit' heroName="Batman"> <button> Click</button></Greet>
<Greet name='Dipesh' heroName="Spiderman"> <button> Dont Click</button></Greet>
<Welcome name='Amrit' heroName="Superman" />
<Welcome name='Ankit' heroName="Batman" />
<Welcome name='Dipesh' heroName="Spiderman"/>
{/*<Hello />*/}

    </div>
  );
}

export default App;
