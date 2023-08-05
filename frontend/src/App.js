import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Reg'
import Dash from './components/Dash'
import Addtask from './components/Addtask';
import ProtectedRoutes from './components/ProtectedRoutes';
import Chat from './components/chat';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/dash' element={<Dash />} />
          <Route path='/add' element={<Addtask />} />
          <Route path='/chat' element={<Chat />} />
        </Route>

        {/* <Route exact path='/register' element={<Register/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
