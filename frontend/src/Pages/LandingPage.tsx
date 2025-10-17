import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import '../Styles/Landing.scss';
import { FaLocationDot } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { Property} from '../Data/data'; 
import {testimonials} from '../Data/TestimonialData' 


const LandingPage: React.FC = () => {
  
  const [category, setCategory] = useState<string>("All");
  const  [currentIndex, setCurrentIndex] = useState<number>(0);

  const filteredProperties = Property.filter(
    (dataProperty) => category === "All" || dataProperty.category === category
  );

  
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} color="#FFD700" />);
    }

    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" color="#FFD700" />);
    }

    while (stars.length < 5) {
      stars.push(<FaRegStar key={`empty-${stars.length}`} color="#FFD700" />);
    }

    return stars;
  };

 
  const latestProperties = [...Property].sort((a, b) => b.id - a.id).slice(0, 3); 

  
  
  const prevSlide=()=> {
    setCurrentIndex((prev)=>
    prev === 0 ? testimonials.length -1:prev -1
    )
  }
  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="container-landing">
    
      <div className="landing-container">
        <div className="search-absackground">
          <h1>Discover property more easily</h1>
          <p>Luido helps people find the perfect home for a better life</p>

          <div className="form">
            <div className="form-group">
              <label htmlFor="sell">For Sell</label>
              <select id="sell">
                <option>For Sale</option>
                <option>For Rent</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="property">Property</label>
              <select id="property">
                <option>House</option>
                <option>Apartment</option>
                <option>Condo</option>
              </select>
            </div>

            <div className="form-group">
              <input type="text" placeholder="Search location..." />
            </div>

            <button>
              <CiSearch size={20} />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>

      <div className="feature-property">
        <h1>Featured Property</h1>
        <div className="box-feature-container">
        
          {latestProperties[0] && (
            <div className="feature-left">
              <div
                className="picture1"
                style={{ backgroundImage: `url(${latestProperties[0].image?.[0]})` }}
              >
                <div className="banner">
                  <h4>{latestProperties[0].title}</h4>
                  <div className="localisation">
                    <span>
                      <FaLocationDot />
                      <p>{latestProperties[0].location}</p>
                    </span>
                    <span><FaHeart /></span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="feature-right">
            {latestProperties[1] && (
              <div
                className="picture2"
                style={{ backgroundImage: `url(${latestProperties[1].image?.[0]})` }}
              >
                <div className="banner">
                  <h4>{latestProperties[1].title}</h4>
                  <div className="localisation">
                    <span>
                      <FaLocationDot />
                      <p>{latestProperties[1].location}</p>
                    </span>
                    <span><FaHeart /></span>
                  </div>
                </div>
              </div>
            )}

            {latestProperties[2] && (
              <div
                className="picture3"
                style={{ backgroundImage: `url(${latestProperties[2].image?.[0]})` }}
              >
                <div className="banner">
                  <h4>{latestProperties[2].title}</h4>
                  <div className="localisation">
                    <span>
                      <FaLocationDot />
                      <p>{latestProperties[2].location}</p>
                    </span>
                    <span><FaHeart /></span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="property-aroud">
          <div className="button-filter">
            <button onClick={() => setCategory("All")}>All</button>
            <button onClick={() => setCategory("Sell")}>Sell</button>
            <button onClick={() => setCategory("Rent")}>Rent</button>
          </div>

          <div className="property-shows">
            {filteredProperties.map((realproperties) => (
              <div className="property-show-card" key={realproperties.id}>
                <img
                  src={realproperties.image?.[1] || realproperties.image?.[0]}
                  alt={realproperties.title}
                />
                <h3>{realproperties.title}</h3>
                <div className="location-rate">
                  <p>{realproperties.location}</p>

                  {realproperties.rating !== undefined && (
                    <>
                      {renderStars(realproperties.rating)}
                      <span className="rating-number">
                        {realproperties.rating.toFixed(1)}
                      </span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="testimony">
          <h1> What People Said About Us</h1>
          <div className="testi-container">
             <div className="slider-btn">
               <FaAngleLeft className='slides-btn' onClick={prevSlide} />
               <FaAngleRight className='slides-btn' onClick={nextSlide} />
             </div>
             <div
            className="testimonial-wrapper"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((testy)=>(
              <div className="testimonial-card" key={testy.id}>
                <img src={testy.picture} alt={testy.name}/>
                <div className="name-descrpt-testy">
                  <p>{testy.testimonial}</p>
                   <h3>{testy.name}</h3>
                </div>
              </div>
            ))}
          </div>
              </div>
          
        </div>

      </div>
    </div>
  );
};

export default LandingPage;
