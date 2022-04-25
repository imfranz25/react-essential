import './css/Main.scss';
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import {Home, About, Events, Contact} from './pages';


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
