import React from 'react'
import '../assets/css/About.css'

const About = () => {
  return (
    <>
    <section>
        <div className="about-header">
            About
        </div>
    </section>

    <section>
        <div className="about-item container py-3">
            <div className="about-title">
                Our History
            </div>
            <div className="about-detail">
                Trippy is owned and managed by Trippy .In Pvt. Ltd., a leading brand in web designing services and e-commerce solutions. Trippy .In Pvt. Ltd. is counted for its expertise in web solutions and its top ranking business portals. Our invincible expertise and rich experience has raised our spirit to reach ahead from our client's expectation. Commendable success rate of other portals managed by Trippy is a live paradigm of our work excellence.
            </div>
        </div>
        <div className="about-item container py-3">
            <div className="about-title">
                Our Mission
            </div>
            <div className="about-detail">
                Our mission is to touch the horizon where our capabilities may successfully meet with the requirements of our clients, that too with ultimate transparency and cost-effectiveness.
            </div>
        </div>
        <div className="about-item container py-3">
            <div className="about-title">
                Our Vision
            </div>
            <div className="about-detail">
                To sow the seeds of par-excellence services with customer centric approach and reap the trust of worldwide clients.
            </div>
        </div>
    </section>
    </>
    )
}

export default About
