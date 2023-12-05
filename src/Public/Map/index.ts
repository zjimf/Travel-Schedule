export function initAutocomplete(inputElement: HTMLInputElement, setLocation) {
    const searchBox = new google.maps.places.SearchBox(inputElement);

    let markers: google.maps.Marker[] = [];

    searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        markers.forEach((marker) => {
            marker.setMap(null);
        });
        markers = [];

        const bounds = new google.maps.LatLngBounds();

        places.forEach((place) => {
            setLocation(place);
            if (!place.geometry || !place.geometry.location)
                return;

            const icon = {
                url: place.icon as string,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25),
            };

            markers.push(
                new google.maps.Marker({
                    icon,
                    title: place.name,
                    position: place.geometry.location,
                })
            );

            if (place.geometry.viewport) {
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
    });
}

declare global {
    interface Window {
        initAutocomplete: (inputElement: HTMLInputElement) => void;
    }
}
window.initAutocomplete = initAutocomplete;
