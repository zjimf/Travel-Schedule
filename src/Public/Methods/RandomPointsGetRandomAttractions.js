async function RandomPointsGetRandomAttractions(randomPoints) {
  const map = new window.google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });

  // const randomPointsArr = [];

  for (const point of randomPoints) {
    const service = new window.google.maps.places.PlacesService(map);
    service.nearbySearch(
      {
        location: new window.google.maps.LatLng(point.lat, point.lng),
        radius: 1000,
        type: ["tourist_attraction"],
      },
      (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          console.log(results);
        } else {
          console.error(`PlacesService error: ${status}`);
        }
      }
    );
  }
}

export default RandomPointsGetRandomAttractions;
