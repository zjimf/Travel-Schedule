import React, { useState } from "react";
import { usePlacesWidget } from "react-google-autocomplete";

const MapSearchbar = () => {
  const [place, setPlace] = useState(null);

  const { ref } = usePlacesWidget({
    apiKey: "AIzaSyBvu9CXWnBNXn-lyz1afGR556fsCrPXX5M",
    onPlaceSelected: (place) => {
      setPlace(place);
    },
  });

  return (
    <div>
      <input
        ref={ref}
        placeholder="Search for a place"
        type="text"
        style={{ width: "300px" }}
      />
      {place && (
        <div>
          <p>Place Name: {place.name}</p>
          <p>Address: {place.formatted_address}</p>
          <p>Latitude: {place.geometry.location.lat()}</p>
          <p>Longitude: {place.geometry.location.lng()}</p>
        </div>
      )}
    </div>
  );
};

export default MapSearchbar;
