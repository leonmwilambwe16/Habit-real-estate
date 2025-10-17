import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import type { PropertyProp } from '../Data/data';
import '../component.styles/Pin.scss';

interface PinProps {
  item: PropertyProp;
}

const Pin: React.FC<PinProps> = ({ item }) => {
  const image = item.image && item.image.length > 0 ? item.image[0] : null;

  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="pin-popup">
          {image && <img src={image} alt={item.title} className="pin-popup-image" />}
          <div className="pin-popup-info">
            <h3>{item.title}</h3>
            <p>{item.location}</p>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
