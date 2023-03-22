import React from 'react'
import '../assets/css/Home.css'
import one from '../assets/images/5.jpg'
import two from '../assets/images/4.jpg'
import three from '../assets/images/10.jpg'
import four from '../assets/images/2.jpg'
const Home = () => {
  return (
    <>
        <section>
            <div className='section-one-container'>
                <div className='section-one-title'>Your journey Your story</div>
                <div className='section-one-subtitle'>Choose your favourite destination</div>
                <div>
                    <button className='section-one-button'>Travel Plans</button>
                </div>
            </div>    
        </section>

        <section>
            <div className='section-two-title-container'>
                <div className='section-two-title center'>
                    Popular Destinations
                </div>
                <div className='section-two-subtitle center'>
                    Tours give you the opportunity to see a lot, within a time frame
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-two-item-title">Taal Volcano, Batangas</div>
                        <div className="section-two-subtitle-item">
                            One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you’ll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="img-item">
                            <center><img src={one} className="section-image" /></center>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="img-item">
                            <center><img src={two} className="section-image" /></center>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section-two-item-title second-item">Mt. Daguldul, Batangas</div>
                        <div className="section-two-subtitle-item">
                            If you’re looking for a hike that’s a little more challenging but still good for a beginner mountaineer, check out Mt. Daguldul in San Juan, Batangas. You’ll start your hike from the beach and pass through tropical forest, different rock formations, and small streams. There’s a small store halfway up the trail where you can take a break and drink buko juice, and though the summit itself may not have the best view, the breeze is fantastic. Once you’ve made it back down, head straight to the beach for a refreshing, well-deserved swim.
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className='section-two-title-container mt-3'>
                <div className='section-two-title center'>
                    Recent Trips
                </div>
                <div className='section-two-subtitle center'>
                    You can discover unique destinations using Google Maps.
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="recent-items">
                            <div className='recent-image-container'>
                                <img src={one} alt="" className='recent-image' />
                            </div>
                            <div className='recent-title'>
                                Trip in Indonesia
                            </div>
                            <div className="recent-desc">
                                Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea.
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="recent-items">
                            <div className='recent-image-container'>
                                <img src={three} alt="" className='recent-image' />
                            </div>
                            <div className='recent-title'>
                                Trip in Malaysia
                            </div>
                            <div className="recent-desc">
                                Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences.
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="recent-items">
                            <div className='recent-image-container'>
                                <img src={two} alt="" className='recent-image' />
                            </div>
                            <div className='recent-title'>
                                Trip in France
                            </div>
                            <div className="recent-desc">
                                Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home
