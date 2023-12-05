import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";

const MapWithDirection = ({ begin, end }) => {
  const [currentLocation, setCurrentLocation] = useState({
    lat: 40.756795,
    lng: -73.954298,
  });
  const [apiInitialized, setApiInitialized] = useState(false);

  const origin = begin ? begin.formatted_address : "";
  const destination = end ? end.formatted_address : "";

  const apiIsLoaded = (map, maps) => {
    if (maps && maps.DirectionsService) {
      const directionsService = new maps.DirectionsService();
      const directionsRenderer = new maps.DirectionsRenderer();
      directionsRenderer.setMap(map);

      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(result);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    }
  };

  const handleApiLoaded = ({ map, maps }) => {
    // 確保 maps 不是 undefined 才呼叫 apiIsLoaded
    if (maps) {
      setApiInitialized(true);
      apiIsLoaded(map, maps);
    }
  };

  useEffect(() => {
    if (apiInitialized) {
      apiIsLoaded();
    }
  }, [origin, destination, apiInitialized]);

  return (
    <div>
      <div style={{ height: "400px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyBvu9CXWnBNXn-lyz1afGR556fsCrPXX5M",
          }}
          defaultCenter={currentLocation}
          defaultZoom={10}
          center={currentLocation}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={handleApiLoaded}
        />
      </div>
    </div>
  );
};

export default MapWithDirection;
