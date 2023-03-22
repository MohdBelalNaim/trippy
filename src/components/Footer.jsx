import React from 'react'
import '../assets/css/Footer.css'

const Footer = () => {
  return (
    <div className='bg-dark px-3 py-3 mt-3'>
      <div className="container">
        <div className="py-3">
            <div className='text-light fw-bold footer-title'>
              Trippy
            </div>
            <div className="text-light footer-desc">Choose your favourite destination.</div>
        </div>

        <div className="row mt-4">
            <div className="col-lg-3">
                <div className="fw-bold h5 text-light footer-item-title">Project</div>
                <div className="h5 text-light py-2 footer-items">Changelog</div>
                <div className="h5 text-light py-2 footer-items">Status</div>
                <div className="h5 text-light py-2 footer-items">License</div>
                <div className="h5 text-light py-2 footer-items">All versions</div>
            </div>
            <div className="col-lg-3">
                <div className="fw-bold h5 text-light footer-item-title">Community</div>
                <div className="h5 text-light py-2 footer-items">Github</div>
                <div className="h5 text-light py-2 footer-items">Issues</div>
                <div className="h5 text-light py-2 footer-items">Project</div>
                <div className="h5 text-light py-2 footer-items">Twitter</div>
            </div>
            <div className="col-lg-3">
                <div className="fw-bold h5 text-light footer-item-title">Help</div>
                <div className="h5 text-light py-2 footer-items">Support</div>
                <div className="h5 text-light py-2 footer-items">Troubleshooting</div>
                <div className="h5 text-light py-2 footer-items">Contact us</div>
            </div>
            <div className="col-lg-3">
                <div className="fw-bold h5 text-light footer-item-title">Others</div>
                <div className="h5 text-light py-2 footer-items">Terms of service</div>
                <div className="h5 text-light py-2 footer-items">Privacy policy</div>
                <div className="h5 text-light py-2 footer-items">License</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
