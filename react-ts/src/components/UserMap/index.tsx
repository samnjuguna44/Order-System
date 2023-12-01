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

  // For simplicity, you can use OpenStreetMap for the map
  const tileLayerURL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

  return (
    <MapContainer
      center={[0, 0]}
      zoom={13}
      style={{ height: "300px", width: "100%" }}
    >
      <TileLayer
        url={tileLayerURL}
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={[0, 0]}>
        <Popup>
          {userAddress}, {city}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default UserMap;
