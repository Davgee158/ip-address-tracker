import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet"; // Import Leaflet for icon fixes

// Fix default marker icons for production builds
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

function Map({ loading, error, data }) {
  if (loading) return <div className="text-center">Loading...</div>;

  if (error)
    return <div className="text-center p-4">Map not available: {error}</div>;

  if (
    !data ||
    !data.location ||
    isNaN(data.location.lat) ||
    isNaN(data.location.lng)
  ) {
    return <div>No location data</div>;
  }

  let lat = data?.location.lat;
  let lng = data?.location.lng;
  const offset = 0.005;

  return (
    <div className="h-[65vh] w-screen md:h-[75vh] lg:h-[65vh] relative z-0 overflow-hidden">
      <MapContainer
        key={`${lat}-${lng}`}
        center={[lat + offset, lng]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[lat, lng]}>
          <Popup>
            Location: {lat}, {lng}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
