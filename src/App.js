
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Component/DashBoard/Dashboard';
import Home from './Component/Home';
import Nav from './Component/Nav';
import SignUp from './Component/SignUp';
import AllStudent from './Component/DashBoard/AllStudent';
import AddStudent from './Component/DashBoard/AddStudent';
import View from './Component/DashBoard/View';
import Edit from './Component/DashBoard/Edit';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/sign" element={<SignUp></SignUp>}></Route>
        <Route path="/view/:id" element={<View></View>}></Route>
        <Route path="/edit/:id" element={<Edit></Edit>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
        <Route index element={<AllStudent></AllStudent>}></Route>
          <Route path="all" element={<AllStudent></AllStudent>}></Route>
          <Route path="add" element={<AddStudent></AddStudent>}></Route>
        </Route>
        
        
      </Routes>
    </div>
  );
}

export default App;
