import './App.css';
import FormInput from './components/FormInput';
import {useState} from 'react';

const App = () => {
  const [username, setUsername] = useState("")

  console.log(username)
  return (
  <div className="App">
    <form>
      <FormInput placeholder="Username" setUsername={setUsername} />
      <FormInput placeholder="Email" />
      <FormInput placeholder="First Name" />
      <FormInput placeholder="Last Name" />
    </form>
    </div>
  );
};

export default App;
