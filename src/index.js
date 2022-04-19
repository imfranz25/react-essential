import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
//styles
import 'bootstrap/dist/css/bootstrap.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

