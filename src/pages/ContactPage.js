import './../css/ContactPage.scss';

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

export default Contact;