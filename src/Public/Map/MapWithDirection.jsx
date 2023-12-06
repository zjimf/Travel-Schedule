import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

class MapWithDirection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLocation: { lat: 40.756795, lng: -73.954298 },
      directionsRenderer: null,
      directionsService: new window.google.maps.DirectionsService(),
    };
  }

  componentDidUpdate(prevProps) {
    const { begin, end } = this.props;
    const { directionsService, directionsRenderer } = this.state;

    if (begin !== prevProps.begin || end !== prevProps.end) {
      directionsService.route(
        {
          origin: begin ? begin.formatted_address : "",
          destination: end ? end.formatted_address : "",
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(result);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    }
  }

  apiIsLoaded = (map, maps) => {
    const directionsRenderer = new window.google.maps.DirectionsRenderer();
    this.setState({ directionsRenderer }, () => {
      directionsRenderer.setMap(map);
      this.updateDirections();
    });
  };

  updateDirections = () => {
    const { begin, end } = this.props;
    const { directionsService } = this.state;

    directionsService.route(
      {
        origin: begin ? begin.formatted_address : "",
        destination: end ? end.formatted_address : "",
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          this.state.directionsRenderer.setDirections(result);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  };

  render() {
    return (
      <div>
        <div style={{ height: "400px", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyBvu9CXWnBNXn-lyz1afGR556fsCrPXX5M",
            }}
            defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
            defaultZoom={10}
            center={this.state.currentLocation}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => this.apiIsLoaded(map, maps)}
          />
        </div>
      </div>
    );
  }
}

export default MapWithDirection;
