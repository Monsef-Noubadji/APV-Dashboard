
import './css/App.css';
import Home from './pages/home'
import NotFound from './pages/NotFound'
import NavBar from './partials/NavBar';
import Footer from './partials/Footer';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
    <Router>
      <NavBar/>
      <div className="pages">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </div>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
