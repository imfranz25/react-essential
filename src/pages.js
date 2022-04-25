
// STYLES
import './css/HomePage.scss';
import './css/AboutPage.scss';
import './css/EventsPage.scss';
import './css/ContactPage.scss';

// ASSETS
import logo from "./assets/images/syra.png"; // logo

// HOME PAGE
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

// ABOUT PAGE
const About = () => (
  <div className="about-container">
    <div className='home-brand'>
      <h1>About SyraTech Enterprise</h1>
    </div>
    <div>
      <p>
        An About Us page helps your company make a good first impression, and is critical for building customer trust and loyalty. An About Us page should make sure to cover basic information about the store and its founders, explain the company's purpose and how it differs from the competition, and encourage discussion and interaction. Here are some free templates, samples, and example About Us pages to help your ecommerce store stand out from the crowd.

        When it comes to personalizing your online store, nothing is more effective than an About Us page. This is a quick summary of your company's history and purpose, and should provide a clear overview of the company's brand story. A great About Us page can help tell your brand story, establish customer loyalty, and turn your bland ecommerce store into an well-loved brand icon. Most importantly, it will give your customers a reason to shop from your brand.

        In this post, we'll give you three different ways to create a professional about us page for your online store, blog, or other website - use our about us page generator, use the fill-in-the-blank about us template below, or create your own custom page using the about us examples within this article.
      </p>
    </div>
  </div>
)

// EVENTS PAGE
const Events = () => (
  <div className="event-container">
    <div id="carouselMaterialStyle" className="carousel slide carousel-fade slide-container" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselMaterialStyle" data-bs-slide-to="0" className="active" aria-current="true"
          aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselMaterialStyle" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselMaterialStyle" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner rounded-5 shadow-4-strong">
        <div className="carousel-item active">
          <img src="https://www.itinfrastructuresummit.com/assets/summit2022/img/og.jpeg" className="d-block w-100"
            alt="Sunset Over the City" height='600' />
          <div className="carousel-caption d-none d-md-block">
            <h5>SyraTech Online Summit</h5>
            <p>SyraTech first ever Online event coming soon!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://www.rasmussen.edu/-/media/images/blogs/402_sotwe_9242015.jpg?la=en&hash=7FF9AA8F39093AB72DEA67CC5815829F25851CC7" className="d-block w-100"
            alt="Canyon at Nigh" height='600' />
          <div className="carousel-caption d-none d-md-block">
            <h5>SyraTech Hackathon 2022</h5>
            <p>The wait is over, call your friends and join now!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://www.jobstreet.com.ph/career-resources/wp-content/uploads/sites/6/2021/04/C_EI_PH_A_Working-in-the-Province_-Join-JobStreet%E2%80%99s-Virtual-Career-Fair-scaled.jpg" className="d-block w-100"
            alt="Cliff Above a Stormy Sea" height='600' />
          <div className="carousel-caption d-none d-md-block">
            <h5>SyraTech Career Fair</h5>
            <p>Advance your career to the next level !</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselMaterialStyle" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselMaterialStyle" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
)

// CONTACT PAGE
const Contact = () => (
  <div className="contact-container p-5 m-5">
    <form method="post">
      <div className='row'>
        <div className='col-6 bg-contact'></div>
        <div className='col-6 p-5 bg-light'>
          <h1 className='mb-5 text-center'>Send Us a Message</h1>
          <div className='form-group my-4'>
            <label className="form-control text-white bg-primary">ENTER YOUR FULL NAME</label>
            <div className='row'>
              <div className='col-6 pe-0'>
                <input type='text' placeholder='First name' className="p-3 form-control" />
              </div>
              <div className='col-6 ps-0'>
                <input type='text' placeholder='Last name' className="p-3 form-control" />
              </div>
            </div>
          </div>
          <div className='form-group mb-4'>
            <label className="form-control text-white bg-primary">ENTER YOUR EMAIL</label>
            <input type='email' placeholder='E.g francis.ong25@gmail.com' className="col-6 p-3 mb-2 form-control" />
          </div>
          <div className='form-group mb-4'>
            <label className="form-control text-white bg-primary">ENTER YOUR PHONE NUMBER</label>
            <input type='text' placeholder='E.g 09000000000' className="col-6 p-3 mb-2 form-control" />
          </div>
          <div className='form-group mb-4'>
            <label className="form-control text-white bg-primary">ENTER MESSAGE</label>
            <textarea className='form-control' rows='7'></textarea>
          </div>
          <h5 className='text-center mt-3'>
            <button className='btn btn-primary mt-3'>Submit</button>
          </h5>
        </div>
      </div>
    </form>
  </div>
)

export {
  Home,
  About,
  Events,
  Contact,
}