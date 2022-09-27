let map, infoWindow;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 28.4568669, lng: 77.5000540275722 },
      zoom: 6,
      mapId: "MAP_ID",

    //   turn off all default controls, obstructing the view here later
    });

    // this is for geolocation
    infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

// handle error from above
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
  }

const marker = google.maps.Marker({
    position: {
        lat: 28.4568669,
        lng: 77.5000540275722,
    },
    map,
    title: "User 1",
    icon: {
        // need pic
        url: "pic.svg",
        scaledSize: new google.maps.Size(50, 50),
    },
    // animation: google.maps.Animation.[some fancy animation]
});

const infoWin = new google.maps.InfoWindow({
    content: "User 1",
});

Marker.addListener("click", () => {
    infoWin.open(map, Marker);
});


// google map api marker
// function addMarker(coords) {
//     const marker = new google.maps.Marker({
//       position: coords,
//       map: map,
//     });
//   }

