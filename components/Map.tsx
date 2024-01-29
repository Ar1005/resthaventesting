import {
    GoogleMap,
    useLoadScript
  } from "@react-google-maps/api";
  
  const Map = () => {
  
    // laod script for google map
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });
  
    if (!isLoaded) return <div>Loading....</div>;
  
    // static lat and lng
    const center = { lat: 'YOUR-LATITUDE', lng: 'YOUR-LONGITUDE' };
  
    return (
      <div className="flex flex-col justify-center items-center gap-5">
  
        {/* map component  */}
        <GoogleMap
          zoom={currentLocation || selectedPlace ? 18 : 12}
          center={currentLocation || searchLngLat || center}
          mapContainerClassName="map"
          mapContainerStyle={{ width: "80%", height: "600px", margin: "auto" }}
        >
        </GoogleMap>
      </div>
    );
  };
  
  export default Map;