import React from 'react'
import '../assets/css/Contact.css'

const Contact = () => {
  return (
    <>
    <section>
        <div className="contact-header">
            Contact
        </div>
    </section>
    <section>
        <div className="container">
            <div className="fw-bold text-center contact-title">Send a message to us!</div>
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <input type="text" className="form-input border-dark form-control py-2 mb-3" placeholder='Name'/>
                    <input type="text" className="form-input border-dark form-control py-2 mb-3" placeholder='Email'/>
                    <input type="text" className="form-input border-dark form-control py-2 mb-3" placeholder='Subject'/>
                    <textarea name="" id="" cols="30" rows="5" placeholder="Message" className="form-input form-control py-2 mb-4 border-dark"></textarea>

                    <button className='form-control btn btn-dark mb-5'>Send</button>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    </section>

    
    </>
    )
}

export default Contact
