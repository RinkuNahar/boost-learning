import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './components/Home/Banner/Banner';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Banner></Banner>}></Route>
      </Routes>
    </div>
  );
}

export default App;
