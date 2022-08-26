/* eslint-disable unused-imports/no-unused-vars */

import {
    Circle,
    GoogleMap,
    Marker,
    useJsApiLoader,
} from "@react-google-maps/api";
import React from "react";

const containerStyle = {
    width: "95vw",
    height: "400px",
    borderRadius: "15px",
    borderColor: "#7874F2",
    borderWidth: "2px",
};

const options = {
    strokeColor: "#63c9c8",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#63c9c8",
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 8,
    zIndex: 1,
};

function Map({
    geo = {
        lat: 41.085562,
        lng: 28.985118,
    },
}) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const center = {
        lat: geo.lat,
        lng: geo.lng,
    };
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY,
    });

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(
        function callback(map) {
            const bounds = new window.google.maps.LatLngBounds(center);
            map.fitBounds(bounds);
            setMap(map);
        },
        [center]
    );

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <Marker position={center} />
            <Circle center={center} options={options} />
        </GoogleMap>
    ) : (
        <></>
    );
}

export default React.memo(Map);
