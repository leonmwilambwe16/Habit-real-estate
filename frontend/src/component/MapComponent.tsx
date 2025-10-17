import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';
import '../component.styles/MapComponent.scss'
import 'leaflet/dist/leaflet.css';
import Pin from './Pin';
import type { PropertyProp } from '../Data/data';

interface MapProps {
  items: PropertyProp[];
}


const MapComponent: React.FC<MapProps>  = ({items}) => {
  
 const position: LatLngExpression = [52.9399, -73.5491];

  return (
    <div className="map-wrapper">
  <MapContainer
    center={position}
    zoom={4}
    scrollWheelZoom={false}
      className="map-container"
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
      {items.map(item => (
          <Pin key={item.id} item={item} />
        ))}
 
  </MapContainer>
</div>

  );
};

export default MapComponent;
