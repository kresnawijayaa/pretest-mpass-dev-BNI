import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function FleetTypeSelect() {
  const { orderId } = useParams();
  const [orderDetails, setOrderDetails] = useState({});

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/orders/${orderId}`);
        if (response.ok) {
          const data = await response.json();
          setOrderDetails(data);
        } else {
          console.error("Failed to fetch order details");
        }
        console.log(orderId, orderDetails);
      } catch (error) {
        console.error("Error fetching order details:", error);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  const formSubmit = async (fleetType) => {
    const updatedOrder = {
      ...orderDetails,
      fleetType: fleetType,
    };

    try {
      const response = await fetch(`http://localhost:3000/orders/${orderId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedOrder),
      });

      if (response.ok) {
        console.log("Order updated successfully!");
        window.location.href = `/confirmation/${orderId}`;
      } else {
        console.error("Failed to update order");
      }
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  const { price } = orderDetails;
  if (!price) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div className="shadow-md p-4 pt-8 z-10 flex text-red-600">
          <Link to="/address">
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

        <div className="px-4 pt-6">
          <h1 className="text-xl font-bold text-neutral-800">Fleet Type</h1>
          <p className="text-neutral-600 text-sm">
            Discover the Ideal Fleet for Your Journey
          </p>
        </div>

        <div className="px-4 py-4">
          <a onClick={() => formSubmit("Redbird (Basic)")}>
            <input
              type="radio"
              name="redbird"
              value="redbird"
              class="hidden peer"
              required
            ></input>
            <article className="rounded-xl border-2 border-gray-100 hover:border-red-600 bg-white">
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
                        Redbird
                      </a>
                    </h3>

                    <p className="line-clamp-2 text-md text-gray-700">
                      Rp {Math.round(price)} - Rp {Math.round(price * 1.1)}
                    </p>

                    <div className="mt-1.5 sm:flex sm:items-center sm:gap-2">
                      <div className="flex items-center gap-1 text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>

                        <p className="text-xs">3-7 mins</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <strong className="mt-auto -mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>

                    <span className="text-[10px] font-medium sm:text-xs">
                      Best price!
                    </span>
                  </strong>
                </div>
              </div>
            </article>
          </a>

          <a onClick={() => formSubmit("Redbird Plus")}>
            <input
              type="radio"
              name="redbirdPlus"
              value="redbirdPlus"
              class="hidden peer"
              required
            ></input>
            <article className="rounded-xl border-2 border-gray-100 hover:border-red-600 bg-white mt-4">
              <div className="flex">
                <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8 ">
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
                        Redbird Plus
                      </a>
                    </h3>

                    <p className="line-clamp-2 text-md text-gray-700">
                      Rp {Math.round(price * 1.05)} - Rp{" "}
                      {Math.round(price * 1.2)}
                    </p>

                    <div className="mt-1.5 sm:flex sm:items-center sm:gap-2">
                      <div className="flex items-center gap-1 text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>

                        <p className="text-xs">3-7 mins</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </a>

          <a onClick={() => formSubmit("Redbird Premium")}>
            <input
              type="radio"
              name="redbirdPremium"
              value="redbirdPremium"
              class="hidden peer"
              required
            ></input>
            <article className="rounded-xl border-2 border-gray-100 hover:border-red-600 bg-white">
              <div className="flex">
                <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8 ">
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
                        Redbird Premium
                      </a>
                    </h3>

                    <p className="line-clamp-2 text-md text-gray-700">
                      Rp {Math.round(price * 1.1)} - Rp{" "}
                      {Math.round(price * 1.3)}
                    </p>

                    <div className="mt-1.5 sm:flex sm:items-center sm:gap-2">
                      <div className="flex items-center gap-1 text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>

                        <p className="text-xs">5-10 mins</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </a>
        </div>
      </>
    );
  }
}
