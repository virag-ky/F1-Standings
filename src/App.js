import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import DriversDetails from './components/DriversDetails';
import ConstructorsDetails from './components/ConstructorsDetails';

const App = () => (
  <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="drivers" element={<DriversDetails />} />
      <Route path="constructors" element={<ConstructorsDetails />} />
    </Routes>
  </div>
);

export default App;
