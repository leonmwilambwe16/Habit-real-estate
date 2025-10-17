import React from 'react';
import '../Styles/Property.scss';
import { Property as propertyData } from '../Data/data';
import { CiSearch } from "react-icons/ci";
import MapComponent from '../component/MapComponent';
import { useNavigate } from 'react-router-dom';


const Property: React.FC = () => {
 const navigate = useNavigate();
  return (
    <div className='property-container'>
      <div className='property-content'>

    
        <div className='box-content-left'>
          <div className="form-input">
            <input type="text" placeholder='Find Appartements and beautiful houses' />
            <CiSearch />
          </div>

          {propertyData.map((property) => (
            <div className='property-card' key={property.id}>
              {property.image && property.image.length > 0 && (
                <div className='property-image-wrapper'>
                  <img
                    src={property.image[0]}
                    alt={property.title}
                    className='property-image'
                  />
                </div>
              )}

              <div className='property-info'>
                <h2>{property.title}</h2>
                <p>{property.location}</p>
                <div className='property-icons'>
                  {property.icons?.map((Icon, index) => (
                    <Icon key={index} size={15} />
                  ))}
                </div>
                <div className="btn-details">
                   <button className='view-details-btn' onClick={()=>navigate(`/property/${property.id}`)}>View Details</button>
                </div>
               
              </div>
            </div>
          ))}
        </div>

       
        <div className='box-content-right'>
          <MapComponent items={propertyData}/>
        </div>
      </div> 
    </div>
  );
};

export default Property;

