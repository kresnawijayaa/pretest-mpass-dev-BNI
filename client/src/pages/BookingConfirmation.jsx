import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookingConfirmation = () => {
  const { orderId } = useParams();
  const [orderDetail, setOrderDetail] = useState({});
  const [locationName, setLocationName] = useState("");
  const [destinationName, setDestinationName] = useState("");

  useEffect(() => {
    const fetchOrderDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/orders/${orderId}`
        );
        setOrderDetail(response.data);
        fetchLocationName(
          response.data.location.lat,
          response.data.location.lng,
          setLocationName
        );
        fetchLocationName(
          response.data.destination.lat,
          response.data.destination.lng,
          setDestinationName
        );
      } catch (error) {
        console.error("Error fetching order detail:", error);
      }
    };

    fetchOrderDetail();
  }, [orderId]);

  const fetchLocationName = async (lat, lng, setName) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyDm37o6ThcY92w_iYWGr0ZaCCDEaYYXCtQ`
      );

      if (response.data.results && response.data.results.length > 0) {
        setName(response.data.results[0].formatted_address);
      } else {
        setName("Location name not found");
      }
    } catch (error) {
      console.error("Error fetching location name:", error);
      setName("Failed to fetch location name");
    }
  };

  function handleBack() {
    window.location.href = `/fleet/${orderId}`;
  }

  function handleOrder() {
    window.location.href = `/checkout/${orderId}`;
  }

  let price = 0;
  if (orderDetail.fleetType === "Redbird (Basic)") {
    price = Math.round(orderDetail.price * 1.05);
  } else if (orderDetail.fleetType === "Redbird Plus") {
    price = Math.round(orderDetail.price * 1.2);
  } else if (orderDetail.fleetType === "Redbird Premium") {
    price = Math.round(orderDetail.price * 1.3);
  }

  return (
    <div>
      <div className="shadow-md p-4 pt-8 z-10 flex text-red-600">
        <a onClick={handleBack}>
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
        </a>
        <h1 className="text-2xl font-bold text-red-600 text-center">Summary</h1>
      </div>

      {/* <div className="px-4 pt-6">
        <h1 className="text-xl font-bold text-neutral-800">Order Detail</h1>
        <p className="text-neutral-600 text-sm mr-20">
          Please review your order before proceeding to the final order
          placement.
        </p>
      </div> */}

      {orderDetail && (
        <div>
          <div className="mx-4 pt-6 pb-4">
            <h1 className="text-lg font-medium text-neutral-800">
              Pickup Location
            </h1>
            <p className="text-neutral-600 text-sm mt-2">{locationName}</p>
          </div>

          <hr className="mx-4" />
        </div>
      )}

      {orderDetail && (
        <div>
          <div className="mx-4 pt-6 pb-4">
            <h1 className="text-lg font-medium text-neutral-800">
              Destination
            </h1>
            <p className="text-neutral-600 text-sm mt-2">{destinationName}</p>
          </div>

          <hr className="mx-4" />
        </div>
      )}

      <div className="mx-4 pt-6 pb-6">
        <h1 className="text-lg font-medium text-neutral-800 mb-2">
          Fleet Type
        </h1>
        <article className="rounded-xl border-2 border-gray-100 bg-white">
          <div className="flex">
            <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8 flex-1">
              <div className="block shrink-0">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 98 98"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="gocar">
                    <rect
                      id="Rectangle 16"
                      width="98"
                      height="98"
                      rx="24"
                      fill="#FFE1DF"
                    />
                    <g id="gocar-icon">
                      <path
                        id="Vector 3"
                        d="M14.0927 59.5341C14.2346 61.3793 18.883 63.3782 21.1895 64.1471C21.4261 63.7331 21.0476 63.6503 21.8992 60.9535C22.9637 57.5825 25.0927 56.6954 26.1573 55.8083C27.2218 54.9212 30.4153 54.2115 33.4315 54.7438C36.4476 55.2761 36.4476 55.2761 38.9315 58.2922L38.9315 58.2922C41.5645 61.4895 41.6519 63.9105 41.4154 65.5664H56.3186C56.5552 64.2062 56.7476 61.0329 57.3831 59.889C58.2702 58.2922 59.1573 57.7599 60.5767 56.3406C61.9961 54.9212 66.4349 54.1867 67.8509 54.389C70.3348 54.7438 69.8025 54.6994 73.1735 57.2277C76.0122 59.3567 76.2488 61.9589 76.5445 63.9696C76.7219 64.0288 77.7864 63.8987 80.6251 62.9051C83.4638 61.9116 84.0552 59.4159 83.9961 58.2922V52.6148C83.937 52.2008 83.5348 50.876 82.3993 48.8889C81.2638 46.9018 78.023 46.1685 76.5445 46.0502L68.2057 45.3406C65.9584 41.6739 61.038 33.9147 59.3348 32.2115C57.6315 30.5082 53.539 29.3136 51.5283 29.0179C46.324 28.9588 35.1702 29.0534 33.6089 29.1954C32.0476 29.3373 28.7003 32.3297 27.0444 33.9857C25.211 37.5932 22.0766 45.3405 20.4798 45.1631C18.7077 44.9662 15.6895 46.9373 14.8024 47.8244C13.9153 48.7115 13.9153 57.2277 14.0927 59.5341Z"
                        fill="#EE2737"
                      />
                      <ellipse
                        id="Ellipse 9"
                        cx="31.3026"
                        cy="64.6793"
                        rx="6.38711"
                        ry="6.38711"
                        fill="#EE2737"
                      />
                      <ellipse
                        id="Ellipse 10"
                        cx="66.4313"
                        cy="64.6793"
                        rx="6.38711"
                        ry="6.38711"
                        fill="#EE2737"
                      />
                    </g>
                  </g>
                </svg>
              </div>

              <div>
                <h3 className="font-medium text-xl">
                  <a href="#" className="hover:underline">
                    {orderDetail.fleetType}
                  </a>
                </h3>

                <p className="line-clamp-2 text-md text-gray-700">Rp {price}</p>
              </div>
            </div>
          </div>
        </article>
      </div>

      <hr className="mx-4" />

      <div className="mx-4 pt-6 pb-6">
        <h1 className="text-lg font-medium text-neutral-800 mb-2">
          Payment Method
        </h1>
        <div className="rounded-xl border-2 border-gray-100 bg-white p-4 flex">
          <div className="w-full">
            <p className="text-neutral-800 text-sm">Balance</p>
            <p className="text-neutral-800 text-sm font-bold text-lg">
              Rp 74.999
            </p>
          </div>
          <div class="flex justify-end items-end">
            <div>
              <p class="text-neutral-800 text-2xl">💵</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="mx-4" />

      <div className="my-4 mx-12 py-4 px-8 rounded-full bg-neutral-100 drop-shadow">
        <p className="text-neutral-600 text-xs text-center">
          Please review your order before proceeding to the final order
          placement.
        </p>
      </div>

      <div className="mx-4 mb-12">
        <button
          onClick={handleOrder}
          className="w-full bg-red-600 px-5 py-3 text-sm font-medium text-white rounded-lg mt-4"
        >
          Order now
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmation;
