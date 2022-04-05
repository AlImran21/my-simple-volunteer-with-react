import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Volunteers from './components/Volunteers/Volunteers';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
       <Route path='/' element={<Main></Main>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/volunteers' element={<Volunteers></Volunteers>}></Route>
     </Routes>
     
    </div>
  );
}

export default App;
