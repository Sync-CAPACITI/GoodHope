// import React, { useEffect, useState } from "react";
// import "../../css/search.css";


// const SearchSchool = () => {
//   const [location, setLocation] = useState("");
//   const [map, setMap] = useState(null);
//   const [infowindow, setInfowindow] = useState(null);
//   const [currentAddress, setCurrentAddress] = useState("");

//   useEffect(() => {
//     initMap();
//   }, []);

//   const initMap = () => {
//     const initialLocation = { lat: -34.397, lng: 150.644 }; // Default location
//     const googleMap = new window.google.maps.Map(
//       document.getElementById("map"),
//       {
//         center: initialLocation,
//         zoom: 15,
//       }
//     );
//     const infoWindow = new window.google.maps.InfoWindow();
//     setMap(googleMap);
//     setInfowindow(infoWindow);
//   };

//   const searchLocation = () => {
//     const request = {
//       query: location,
//       fields: ["name", "geometry"],
//     };

//     const service = new window.google.maps.places.PlacesService(map);
//     service.findPlaceFromQuery(request, (results, status) => {
//       if (
//         status === window.google.maps.places.PlacesServiceStatus.OK &&
//         results[0]
//       ) {
//         const { geometry, name } = results[0];
//         map.setCenter(geometry.location);
//         infowindow.setContent(name);
//         infowindow.open(
//           map,
//           new window.google.maps.Marker({
//             position: geometry.location,
//             map: map,
//           })
//         );
//         setCurrentAddress(name);
//       }
//     });
//   };

//   const toggleFullScreen = () => {
//     const mapContainer = document.getElementById("map");
//     if (!document.fullscreenElement) {
//       mapContainer.requestFullscreen().catch((err) => {
//         alert(`Error trying to enable full-screen mode: ${err.message}`);
//       });
//     } else {
//       document.exitFullscreen();
//     }
//   };

//   return (
//     <div className="container">
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search for a location..."
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//         />
//         <button onClick={searchLocation}>Search</button>
//         <button onClick={toggleFullScreen}>Full Screen</button>
//       </div>
//       <div id="map" className="map"></div>
//       <div className="address-display">
//         {currentAddress && <p>Selected Address: {currentAddress}</p>}
//       </div>
//     </div>
//   );
// };

// export default SearchSchool;


import React, { useEffect, useState } from "react";
import "../../css/search.css";

const SearchSchool = () => {
  const [location, setLocation] = useState("");
  const [map, setMap] = useState(null);
  const [infowindow, setInfowindow] = useState(null);
  const [currentAddress, setCurrentAddress] = useState("");
  const [userLocation, setUserLocation] = useState(null); // Store user's current location
  const [filteredResults, setFilteredResults] = useState([]); // Filtered results based on distance

  useEffect(() => {
    initMap();
    getUserLocation(); // Get user's geolocation
  }, []);

  const initMap = () => {
    const initialLocation = { lat: -34.397, lng: 150.644 }; // Default location
    const googleMap = new window.google.maps.Map(
      document.getElementById("map"),
      {
        center: initialLocation,
        zoom: 15,
      }
    );
    const infoWindow = new window.google.maps.InfoWindow();
    setMap(googleMap);
    setInfowindow(infoWindow);
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setUserLocation(location);
        map.setCenter(location); // Center the map on user's location
      });
    }
  };

  const searchLocation = () => {
    const request = {
      query: location,
      fields: ["name", "geometry"],
    };

    const service = new window.google.maps.places.PlacesService(map);
    service.findPlaceFromQuery(request, (results, status) => {
      if (
        status === window.google.maps.places.PlacesServiceStatus.OK &&
        results[0]
      ) {
        const nearbySchools = results.map((place) => ({
          name: place.name,
          location: place.geometry.location,
        }));

        filterResultsByDistance(nearbySchools); // Filter results by distance
      }
    });
  };

  const filterResultsByDistance = (schools) => {
    if (userLocation) {
      const service = new window.google.maps.DistanceMatrixService();
      service.getDistanceMatrix(
        {
          origins: [userLocation],
          destinations: schools.map((school) => school.location),
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
          if (status === "OK") {
            const distances = response.rows[0].elements;
            const nearbySchools = schools.filter((school, index) => {
              const distance = distances[index].distance.value; // distance in meters
              return distance < 5000; // Distance threshold (e.g., 5 km)
            });

            setFilteredResults(nearbySchools);
            if (nearbySchools.length > 0) {
              const { name } = nearbySchools[0];
              alert(`Nearby school found: ${name}`);
            }
          }
        }
      );
    }
  };

  const toggleFullScreen = () => {
    const mapContainer = document.getElementById("map");
    if (!document.fullscreenElement) {
      mapContainer.requestFullscreen().catch((err) => {
        alert(`Error trying to enable full-screen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={searchLocation}>Search</button>
        <button onClick={toggleFullScreen}>Full Screen</button>
      </div>
      <div id="map" className="map"></div>
      <div className="address-display">
        {filteredResults.length > 0 && (
          <div>
            <h3>Nearby Schools Found:</h3>
            <ul>
              {filteredResults.map((school, index) => (
                <li key={index}>{school.name}</li>
              ))}
            </ul>
          </div>
        )}
        {currentAddress && <p>Selected Address: {currentAddress}</p>}
      </div>
    </div>
  );
};

export default SearchSchool;