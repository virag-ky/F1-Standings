import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import DriversDetails from './components/DriversDetails';
import ConstructorsDetails from './components/ConstructorsDetails';

const App = () => {
  const season = useSelector((state) => state.home);
  const currentYear = new Date().getFullYear().toString();

  return (
    <div className="App">
      <Navbar season={season} currentYear={currentYear} />
      <Routes>
        <Route
          path="/"
          element={<HomePage season={season} currentYear={currentYear} />}
        />
        <Route path="drivers" element={<DriversDetails />} />
        <Route path="constructors" element={<ConstructorsDetails />} />
      </Routes>
    </div>
  );
};

export default App;
