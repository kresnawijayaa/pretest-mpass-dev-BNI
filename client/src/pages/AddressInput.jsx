import { Link } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import axios from "axios";

const calculatePrice = (distance) => {
  let basePrice = 25000;
  const additionalPricePer5km = 10000;

  if (distance <= 5.0) {
    return basePrice;
  } else {
    const extraDistance = distance - 5.0;
    const additionalPrice =
      Math.floor(extraDistance / 5.0) * additionalPricePer5km;
    return basePrice + additionalPrice;
  }
};

const submitOrder = (locations) => {
  const { location, destination, directions } = locations;

  const email = localStorage.getItem("access_token");

  if (location && destination && directions && email) {
    const distance = directions.routes[0].legs[0].distance.value / 1000;
    const distanceText = directions.routes[0].legs[0].distance.text;
    const price = calculatePrice(distance);

    const data = {
      email,
      location,
      destination,
      distance: distanceText,
      price,
    };

    axios
      .post("http://localhost:3000/orders", data)
      .then((response) => {
        console.log("Order submitted successfully:", response.data);
        const orderId = response.data.id;
        window.location.href = `/fleet/${orderId}`;
      })
      .catch((error) => {
        console.error("Error submitting order:", error);
      });
  } else {
    console.error(
      "Location, destination, directions data, or email is missing."
    );
  }
};

export default function Places() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDm37o6ThcY92w_iYWGr0ZaCCDEaYYXCtQ",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(
    () => ({ lat: -6.204010346402975, lng: 106.82272821301905 }),
    []
  );
  const [locations, setLocations] = useState({
    location: null,
    destination: null,
    directions: null,
  });

  const mapOptions = {
    zoomControl: true, // Menampilkan kontrol zoom
    fullscreenControl: false, // Menyembunyikan kontrol fullscreen
    streetViewControl: false, // Menyembunyikan kontrol street view
    mapTypeControl: false, // Menyembunyikan kontrol map type
    scaleControl: false, // Menyembunyikan kontrol scale
    rotateControl: false, // Menyembunyikan kontrol rotate
    panControl: false, // Menyembunyikan kontrol pan
  };

  const handleSelected = (place, type) => {
    const { lat, lng } = place;
    setLocations((prev) => ({ ...prev, [type]: { lat, lng } }));
  };

  useEffect(() => {
    if (locations.location && locations.destination) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: locations.location,
          destination: locations.destination,
          travelMode: "DRIVING",
        },
        (result, status) => {
          if (status === "OK") {
            setLocations((prev) => ({ ...prev, directions: result })); // Store directions in state
            const distance = result.routes[0].legs[0].distance.text;
            console.log("Distance:", distance);
          } else {
            console.error("Error fetching directions", result);
          }
        }
      );
    }
  }, [locations.location, locations.destination]);

  return (
    <>
      <div className="shadow-md p-4 pt-8 z-10 flex text-red-600">
        <Link to="/">
          <svg
            className="h-8 w-8 rtl:rotate-180 mt-1.5 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
            />
          </svg>
        </Link>
        <h1 className="text-2xl font-bold text-red-600 text-center">Order</h1>
      </div>

      <GoogleMap
        zoom={13}
        center={center}
        mapContainerClassName="w-full h-[500px]"
        options={{ mapTypeControl: false, streetViewControl: false }}
      >
        {locations.location && !locations.directions && (
          <Marker position={locations.location} />
        )}
        {locations.destination && !locations.directions && (
          <Marker position={locations.destination} />
        )}
        {locations.directions && (
          <DirectionsRenderer directions={locations.directions} />
        )}
      </GoogleMap>

      <div className="px-4 mt-4 z-10">
        <div className="relative rounded-lg border border-1 p-4">
          <PlacesAutocomplete
            setSelected={(place) => handleSelected(place, "location")}
            placeholder="Search pick up location"
            className="h-10 w-full rounded-lg border border-1 bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
          />

          <div className="absolute end-1 top-1/2 -translate-y-1/2 mr-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="pickup icon">
                <circle id="Ellipse 30" cx="15" cy="15" r="15" fill="#00AA13" />
                <path
                  id="Vector"
                  d="M15 9L21 15M15 9L9 15M15 9V23"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </div>
        </div>

        <div className="relative mt-4 rounded-lg border border-1 p-4">
          <PlacesAutocomplete
            setSelected={(place) => handleSelected(place, "destination")}
            placeholder="Search destination"
            className="h-10 w-full rounded-lg border border-1 bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
          />

          <div className="absolute end-1 top-1/2 -translate-y-1/2 mr-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="destination icon">
                <circle id="Ellipse 32" cx="15" cy="15" r="15" fill="#ED6723" />
                <circle
                  id="Ellipse 33"
                  cx="5"
                  cy="5"
                  r="5"
                  transform="matrix(1 0 0 -1 10 20)"
                  fill="white"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div className="mx-4 pb-4">
        <button
          onClick={() => submitOrder(locations)}
          className="w-full bg-red-600 px-5 py-3 text-sm font-medium text-white rounded-lg mt-4"
        >
          Continue
        </button>
      </div>
    </>
  );
}

const PlacesAutocomplete = ({ setSelected, placeholder }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className="combobox-input"
        placeholder={placeholder}
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption
                key={place_id}
                value={description}
                className="text-sm text-gray-800"
              />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};
