import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/Home.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Checkout() {
  const { orderId } = useParams();
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    const randomTime = Math.floor(Math.random() * (15 - 5 + 1)) + 10;
    let timer = randomTime;

    const countdownTimer = setInterval(() => {
      setCountdown(timer);
      if (timer === 1) {
        clearInterval(countdownTimer);
        window.location.href = `/waiting/${orderId}`;
      } else {
        timer -= 1;
      }
    }, 1000);

    return () => {
      clearInterval(countdownTimer);
    };
  }, [orderId]);

  function cancelOrder() {
    window.location.href = `/confirmation/${orderId}`;
  }

  return (
    <>
      <div className="shadow-md p-4 pt-8 z-10 flex text-red-600">
        <h1 className="text-2xl font-bold text-red-600 text-center">
          Checkout
        </h1>
      </div>

      <div className="mx-4 my-6">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              alt="Welcome"
              src="https://images.unsplash.com/photo-1628947733273-cdae71c9bfd3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGF4aXxlbnwwfDB8MHx8fDA%3D"
              className="w-full rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="Welcome"
              src="https://images.unsplash.com/39/mtNrf7oxS4uSxTzMBWfQ_DSC_0043.jpg?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHRheGl8ZW58MHwwfDB8fHww"
              className="w-full rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              alt="Welcome"
              src="https://images.unsplash.com/photo-1605414262199-63817d195576?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHRheGl8ZW58MHwwfDB8fHww"
              className="w-full rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              alt="Welcome"
              src="https://images.unsplash.com/photo-1540567233509-b1256189865d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHRheGl8ZW58MHwwfDB8fHww"
              className="w-full rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              alt="Welcome"
              src="https://images.unsplash.com/photo-1550837725-56d9e2f0d89b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHRheGl8ZW58MHwwfDB8fHww"
              className="w-full rounded-xl"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="px-4 text-center">
        <p className="text-neutral-600 text-md">Finding your driver ...</p>

        <h1 className="text-xl font-bold text-red-600 mt-2">
          Estimated {countdown} seconds
        </h1>
      </div>

      <div className="mx-4 mb-12 text-center mt-24">
        <p className="text-neutral-600 text-md">Changed your mind?</p>

        <button
          onClick={cancelOrder}
          className="bg-red-600 px-14 py-3 text-sm font-medium text-white rounded-lg mt-4"
        >
          Cancel order
        </button>
      </div>
    </>
  );
}
