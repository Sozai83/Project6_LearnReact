import logo from './logo.svg';
import './App.css';
import {Router} from './components/router/Router'
import { UserProvider } from './providers/UserProvider';
import { RecoilRoot } from 'recoil';
import axios from "axios";

function App() {

  const onClickUsers = ()=>{
    axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{console.log(res.data)})
    .catch((err)=>console.error(err))
  }

  const onClickUser1 = ()=>{
    axios
    .get('https://jsonplaceholder.typicode.com/users/1')
    .then((res)=>{console.log(res.data)})
    .catch((err)=>console.error(err))
  }


  return (
    <RecoilRoot>
      <UserProvider>
        <Router/>
        <button onClick={onClickUsers}>Users</button>
        <button onClick={onClickUser1}>User 1</button>
      </UserProvider>
    </RecoilRoot>
  );
}

export default App;
