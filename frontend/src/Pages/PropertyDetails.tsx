import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Property as propertyData } from '../Data/data';
import '../Styles/PropertyDetails.scss'

const PropertyDetails:React.FC = () => {
  const {id} = useParams<{id:string}>();
  const navigate = useNavigate();
  
  const property = propertyData.find((item)=>item.id.toString()===id);
  if(!property){
    return <div style={{ padding: "20px" }}>Property not found</div>
  }

    const handleAddToFavorites = () => {
    // You can store favorites in localStorage or a global state (like Redux)
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (!favorites.find((fav: any) => fav.id === property.id)) {
      favorites.push(property);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      alert("Property added to favorites ❤️");
    } else {
      alert("Already in favorites!");
    }
  };

  return (
    <div className='property-details-container'>
     <button onClick={()=>navigate(-1)} className='back-btn'>⬅ Back</button>
     <h1>{property.title}</h1>
     <p>{property.location}</p>
     <div className="property-images">
        {property.image?.map((img, index) => (
          <img key={index} src={img} alt={`${property.title} ${index}`} />
        ))}
      </div>
       <div className="property-description">
        <p>"No description available."</p>
      </div>
       <button className="favorite-btn" onClick={handleAddToFavorites}>
        ❤️ Add to Favorites
      </button>
    </div>
  )
}

export default PropertyDetails