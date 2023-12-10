const getRouteAndRandomPoints = (begin, end, nodeNum) => {
  return new Promise((resolve, reject) => {
    const directionsService = new window.google.maps.DirectionsService();
    const request = {
      origin: new window.google.maps.LatLng({
        lat: begin.geometry.location.lat(),
        lng: begin.geometry.location.lng(),
      }),
      destination: new window.google.maps.LatLng({
        lat: end.geometry.location.lat(),
        lng: end.geometry.location.lng(),
      }),
      travelMode: window.google.maps.TravelMode.DRIVING,
    };

    directionsService.route(request, (response, status) => {
      if (status === window.google.maps.DirectionsStatus.OK) {
        const route = response.routes[0];
        const path = route.overview_path;

        const randomPoints = [];
        for (let i = 0; i < nodeNum; i++) {
          const randomIndex = Math.floor(Math.random() * path.length);
          const randomPoint = path[randomIndex];
          randomPoints.push({
            lat: randomPoint.lat(),
            lng: randomPoint.lng(),
          });
        }

        resolve(randomPoints);
      } else {
        reject(`Directions request failed: ${status}`);
      }
    });
  });
};

export default getRouteAndRandomPoints;
