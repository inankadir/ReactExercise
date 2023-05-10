import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header>
        <User />
        <AddNewTodo />
        <Calender />
        <Projects />
      </Header>
      <Main>
        <h2>Hello</h2>
      </Main>
    </div>
  );
}

export default App;
