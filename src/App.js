import './css/Main.scss';
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Events from './pages/EventsPage';
import Contact from './pages/ContactPage';
//import {Home, About, Events, Contact} from './pages';


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/events' element={<Events />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App;
