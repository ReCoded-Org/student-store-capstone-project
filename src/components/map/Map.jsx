/* eslint-disable unused-imports/no-unused-vars */

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
    width: "95vw",
    height: "400px",
    borderRadius: "15px",
    borderColor: "#7874F2",
    borderWidth: "2px",
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
        googleMapsApiKey: "AIzaSyAnHNX_kANW6oxjdcDoOs8VVwDAOsbA9ZY",
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
        </GoogleMap>
    ) : (
        <></>
    );
}

export default React.memo(Map);
