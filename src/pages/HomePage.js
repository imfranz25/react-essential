
import '../css/HomePage.scss';
import logo from "../assets/images/syra.png"; // logo

const Home = () => (
  <div className="home-container">
    <div className='home-brand'>
      <div className='img-container'>
        <img alt='SyraTech' src={logo}/>
      </div>
      <h1>Welcome to SyraTech Enterprise</h1>
    </div>
  </div>
)

export default Home;