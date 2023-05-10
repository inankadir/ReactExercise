import Siderbar from './components/Siderbar';
import Main from './components/Main';
import User from './components/User';
import AddNewTodo from './components/AddNewTodo';
import Calender from './components/Calendar';
import Projects from './components/Projects';
import Todos from './components/Todos';
import EditTodo from './components/EditTodo';

function App() {
  return (
    <div className="App">
      <Siderbar>
        <User />
        <AddNewTodo />
        <Calender />
        <Projects />
      </Siderbar>
      <Main>
        <Todos />
        <EditTodo />
      </Main>
    </div>
  );
}

export default App;
