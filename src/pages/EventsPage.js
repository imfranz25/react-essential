import './../css/EventsPage.scss';

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

export default Events;