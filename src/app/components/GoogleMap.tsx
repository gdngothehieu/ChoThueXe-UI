import React, { useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 10.863299,
  lng: 106.587665,
};

function GoogleApp() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBpACrQWi7wH3GLxy-yk1VNwuNtOnDBb_s",
  });

  const [map, setMap] = React.useState(null);
  const onLoad = React.useCallback(function callback(map: any) {
    setMap(map);
  }, []);
  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Marker
        icon={{
          url:
            "https://insulationpads.co.uk/wp-content/uploads/2017/10/Home.png",
          scaledSize: new window.google.maps.Size(40, 40),
        }}
        position={{ lat: 21.027763, lng: 105.83416 }}
      />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(GoogleApp);
