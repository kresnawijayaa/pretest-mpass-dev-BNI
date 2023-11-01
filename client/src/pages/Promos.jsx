import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Promos() {
  // const [promos, setPromos] = useState([]);

  // useEffect(() => {
  //   const handleError = (error) => {
  //     console.error("Error fetching promos:", error);
  //   };

  //   const getPromos = async () => {
  //     try {
  //       const token =
  //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc1OTE0MTUwLCJleHAiOjE2Nzg1MDYxNTB9.TcIgL5CDZYg9o8CUsSjUbbUdsYSaLutOWni88ZBs9S8";

  //       const response = await Axios.get("https://content.digi46.id/promos", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });

  //       if (response.status === 200) {
  //         setPromos(response.data);
  //       }
  //     } catch (error) {
  //       handleError(error);
  //     }
  //   };

  //   getPromos();
  // }, []);

  return (
    <>
      {/* <div>
        {promos.map((promo) => (
          <div key={promo.id}>
            <h2>{promo.title}</h2>
            <p>{promo.description}</p>
            <img src={promo.image} alt={promo.title} />
          </div>
        ))}
      </div> */}

      <div className="bg-white fixed inset-x-0 top-0">
        <div className="shadow-md p-4 pt-8 z-10">
          <h1 className="text-2xl font-bold text-red-600">Promos</h1>
        </div>

        <div className="p-4 mt-2 z-10">
          <div className="relative">
            <label className="sr-only" htmlFor="search">
              {" "}
              Search{" "}
            </label>

            <input
              className="h-10 w-full rounded-full border border-1 bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
              id="search"
              type="search"
              placeholder="Search promo..."
            />

            <button
              type="button"
              className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
            >
              <span className="sr-only">Search</span>
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 pt-44">
        <article className="overflow-hidden rounded-xl shadow-md border border-1 mb-6">
          <img
            alt="Office"
            src="https://www.linkaja.id/uploads/images/promo//YW50aWtvZGVfXzE2OTY1ODE4NTdfd2ViLWJhbm5lci03OTR4MzY2LTIwMjMtMTAtMDZ0MTU0NDAzLTEyNi1qcGc.jpg"
            className="imgUrl h-40 w-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <a href="#">
              <h3 className="title text-lg font-bold text-gray-900">
                Discount 15% (Up to IDR 15,000)
              </h3>
              <p className="expired line-clamp-2 text-sm/relaxed text-gray-500">
                Until 30 NOV 2023
              </p>
              <div className="flex">
                <h3 className="w-full code mt-4 text-sm font-bold text-gray-900">
                  Promo Code: NOVABC
                </h3>
                <a
                  class="inline-block rounded border border-red-600 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-600 hover:text-white focus:outline-none focus:ring active:bg-red-500"
                  href=""
                >
                  Use
                </a>
              </div>
            </a>
          </div>
        </article>

        <article className="overflow-hidden rounded-xl shadow-md border border-1 mb-6">
          <img
            alt="Office"
            src="https://www.linkaja.id/uploads/images/promo//YW50aWtvZGVfXzE2OTg2MzEwODZfd2ViLWJhbm5lci03OTR4MzY2LTIwMjMtMTAtMzB0MDg1NzU0LTY1NC1qcGc.jpg"
            className="imgUrl h-40 w-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <a href="#">
              <h3 className="title text-lg font-bold text-gray-900">
                Discount 10% (Up to IDR 15,000)
              </h3>
              <p className="expired line-clamp-2 text-sm/relaxed text-gray-500">
                Until 30 DEC 2023
              </p>
              <div className="flex">
                <h3 className="w-full code mt-4 text-sm font-bold text-gray-900">
                  Promo Code: PAYDEC
                </h3>
                <a
                  class="inline-block rounded border border-red-600 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-600 hover:text-white focus:outline-none focus:ring active:bg-red-500"
                  href=""
                >
                  Use
                </a>
              </div>
            </a>
          </div>
        </article>

        <article className="overflow-hidden rounded-xl shadow-md border border-1 mb-6">
          <img
            alt="Office"
            src="https://www.linkaja.id/uploads/images/promo//YW50aWtvZGVfXzE2OTY1ODE3MDZfd2ViLWJhbm5lci03OTR4MzY2LTIwMjMtMTAtMDZ0MTU0MTM3LTQ4Ny1qcGc.jpg"
            className="imgUrl h-40 w-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <a href="#">
              <h3 className="title text-lg font-bold text-gray-900">
                Discount IDR 50,000
              </h3>
              <p className="expired line-clamp-2 text-sm/relaxed text-gray-500">
                Until 31 DEC 2023
              </p>
              <div className="flex">
                <h3 className="w-full code mt-4 text-sm font-bold text-gray-900">
                  Promo Code: DECBIGDAY
                </h3>
                <a
                  class="inline-block rounded border border-red-600 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-600 hover:text-white focus:outline-none focus:ring active:bg-red-500"
                  href=""
                >
                  Use
                </a>
              </div>
            </a>
          </div>
        </article>

        <article className="overflow-hidden rounded-xl shadow-md border border-1 mb-6">
          <img
            alt="Office"
            src="https://www.linkaja.id/uploads/images/promo//YW50aWtvZGVfXzE2OTc1MzU4NDBfd2ViLWJhbm5lci03OTR4MzY2LTIwMjMtMTAtMTd0MTYzOTQzLTExMi1qcGc.jpg"
            className="imgUrl h-40 w-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <a href="#">
              <h3 className="title text-lg font-bold text-gray-900">
                Discount 15% (Up to IDR 15,000)
              </h3>
              <p className="expired line-clamp-2 text-sm/relaxed text-gray-500">
                Until 30 OCT 2023
              </p>
              <div className="flex">
                <h3 className="w-full code mt-4 text-sm font-bold text-gray-900">
                  Promo Code: ABCOCT
                </h3>
                <a
                  class="inline-block rounded border border-red-600 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-600 hover:text-white focus:outline-none focus:ring active:bg-red-500"
                  href=""
                >
                  Use
                </a>
              </div>
            </a>
          </div>
        </article>

        <article className="overflow-hidden rounded-xl shadow-md border border-1 mb-6">
          <img
            alt="Office"
            src="https://www.linkaja.id/uploads/images/promo//YW50aWtvZGVfXzE2OTg4MTI4ODlfd2ViLWJhbm5lci03OTR4MzY2LTIwMjMtMTAtMzF0MjMxMzU1LTEwNS1qcGc.jpg"
            className="imgUrl h-40 w-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <a href="#">
              <h3 className="title text-lg font-bold text-gray-900">
                Discount IDR 100,000
              </h3>
              <p className="expired line-clamp-2 text-sm/relaxed text-gray-500">
                Until 5 NOV 2023
              </p>
              <div className="flex">
                <h3 className="w-full code mt-4 text-sm font-bold text-gray-900">
                  Promo Code: NOVWISH
                </h3>
                <a
                  class="inline-block rounded border border-red-600 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-600 hover:text-white focus:outline-none focus:ring active:bg-red-500"
                  href=""
                >
                  Use
                </a>
              </div>
            </a>
          </div>
        </article>
      </div>
      <div className="h-12 bg-white"></div>
    </>
  );
}
