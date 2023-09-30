import logo from './logo.svg';
import './App.css';
import Header from './header';
import Main from './main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Recipes from './recipes';

function App() {
  return (
    <>
    <Header />
    {/* <Main /> */}

    <Router>
      <Routes>
          <Route  exact path="/" Component={Main} />
          <Route exact path="/recipes" Component={Recipes} />
      </Routes>
    </Router>

    </>
  );
}

export default App;
