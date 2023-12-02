import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface UserAddress {
  address: string;
  city: string;
}

interface UserMapProps {
  address: UserAddress;
}

const UserMap: React.FC<UserMapProps> = ({ address }) => {
  const { city, address: userAddress } = address;

  // usage of OpenStreetMap for the map
  const tileLayerURL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

  return (
    <MapContainer
      center={[38.867033, -76.979235]}
      zoom={5}
      style={{ height: "300px", width: "100%" }}
    >
      <TileLayer
        url={tileLayerURL}
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={[38.867033, -76.979235]}>
        <Popup>
          {userAddress}, {city}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default UserMap;