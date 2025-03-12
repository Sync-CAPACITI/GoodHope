import React, { useEffect, useState } from 'react';
import './search.css';

const App = () => {
    const [location, setLocation] = useState('');
    const [map, setMap] = useState(null);
    const [infowindow, setInfowindow] = useState(null);
    const [currentAddress, setCurrentAddress] = useState('');

    useEffect(() => {
        initMap();
    }, []);

    const initMap = () => {
        const initialLocation = { lat: -34.397, lng: 150.644 }; // Default location
        const googleMap = new window.google.maps.Map(document.getElementById('map'), {
            center: initialLocation,
            zoom: 15
        });
        const infoWindow = new window.google.maps.InfoWindow();
        setMap(googleMap);
        setInfowindow(infoWindow);
    };

    const searchLocation = () => {
        const request = {
            query: location,
            fields: ['name', 'geometry']
        };

        const service = new window.google.maps.places.PlacesService(map);
        service.findPlaceFromQuery(request, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK && results[0]) {
                const { geometry, name } = results[0];
                map.setCenter(geometry.location);
                infowindow.setContent(name);
                infowindow.open(map, new window.google.maps.Marker({
                    position: geometry.location,
                    map: map
                }));
                setCurrentAddress(name);
            }
        });
    };

    const toggleFullScreen = () => {
        const mapContainer = document.getElementById('map');
        if (!document.fullscreenElement) {
            mapContainer.requestFullscreen().catch(err => {
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
                {currentAddress && <p>Selected Address: {currentAddress}</p>}
            </div>
        </div>
    );
};

export default App;