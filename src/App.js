import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Archive } from './pages/Archive';
import { RecycleBin } from './pages/Bin';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/archive' element={<Archive/>}></Route>
      <Route path='/bin' element={<RecycleBin/>}></Route>
      
     </Routes>
  );
}

export default App;
