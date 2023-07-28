import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Hello from './component/Hello';
import Message from './component/Message';
import Counter from './component/Counter';
import FunctionClick from './component/FunctionClick';
import ClassClick from './component/ClassClick';
import EventBind from './component/EventBind';
import ParentComponent from './component/ParentComponent';
import ChildComponent from './component/ChildComponent';
import UserGreeting from './component/UserGreeting';
import NameList from './component/NameList';
import Stylesheet from './component/Stylesheet';
import inline from './component/inline';
import './appStyle.css';
import style from './appStyle.module.css';
import Form from './component/Form';
import LifeCycleA from './component/LifeCycleA';
import FragmentDemo from './component/FragmentDemo';
import ParentComp from './component/ParentComp';
import RefsDemo from './component/RefsDemo';
import Focusinput from './component/Focusinput';


function App() {
  return (
   
    <div className="App">
      <Focusinput></Focusinput>

     { /*<RefsDemo></RefsDemo>*/}

     {/*<ParentComp></ParentComp>*/}

      {/*<FragmentDemo></FragmentDemo>*/}

      {/*<LifeCycleA></LifeCycleA>*/}

      {/*<Form></Form>*/}

     {/*<h1 className='error'>Error</h1>*/}
     {/*<h1 className={style.success}>Success</h1>*/}

      {/*<inline></inline>*/}

      {/*<Stylesheet primary= {true}></Stylesheet>*/}

      {/*<NameList></NameList>*/}

       {/*<UserGreeting></UserGreeting>*/}

     {/*<ParentComponent></ParentComponent>*/}

      {/*<EventBind></EventBind>*/}

      {/*<ClassClick></ClassClick>*/}

      {/*<FunctionClick></FunctionClick>*/}

      {/*<Counter></Counter>*/}

       {/* learning props in a state components*
       <Message></Message>*/}

       {/* learning props in a function and pass them as children*/}

      {/*<Greet name="Ako" heroName="superman">This is children props</Greet>
      <Greet name="Ben" heroName="wonderman">
        <button >Action</button>
      </Greet>
  <Greet name="TBoy" heroName="dokiman"></Greet>*/}

      {/* learning props in a class and pass them as children*/}
     {/* <Welcome name="Atem" heroName="Chelsea">This for Children</Welcome>
      <Welcome name="Sam" heroName="Liverpool">
        <button className='click'>submit</button>
      </Welcome>
      <Welcome name="Deric" heroName="Manchester"></Welcome>
      {/*<Hello></Hello>*/}         
       
    </div>
  );
}

export default App;
