import logo from "../assets/logo-full.png";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/Home.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Home() {
  const access_token = localStorage.access_token;
  const result = access_token.split("@")[0].replace(/[^a-z]/gi, "");
  const user = result.slice(0, 1).toUpperCase() + result.slice(1);

  return (
    <>
      <div className="bg-white shadow-md py-4 z-10">
        <img alt="Welcome" src={logo} className="w-40" />
      </div>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            alt="Welcome"
            src="https://www.linkaja.id/uploads/images/promo//YW50aWtvZGVfXzE2OTc0MzE5MDNfd2ViLWJhbm5lci03OTR4MzY2LTIwMjMtMTAtMTZ0MTE1MDA2LTAyNi1qcGc.jpg"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="Welcome"
            src="https://www.linkaja.id/uploads/images/promo//YW50aWtvZGVfXzE2OTg3NDQwMzRfd2ViLWJhbm5lci03OTR4MzY2LTIwMjMtMTAtMzF0MTYxNjU0LTUyMS1qcGc.jpg"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            alt="Welcome"
            src="https://www.linkaja.id/uploads/images/promo//YW50aWtvZGVfXzE2OTc1MzU4NDBfd2ViLWJhbm5lci03OTR4MzY2LTIwMjMtMTAtMTd0MTYzOTQzLTExMi1qcGc.jpg"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            alt="Welcome"
            src="https://www.linkaja.id/uploads/images/promo//YW50aWtvZGVfXzE2OTgzMDY1MzJfd2ViLWJhbm5lci03OTR4MzY2LTIwMjMtMTAtMjZ0MTQ0NjM0LTc5MS1qcGc.jpg"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            alt="Welcome"
            src="https://www.linkaja.id/uploads/images/promo//YW50aWtvZGVfXzE2OTg4MjAzNDhfd2ViLWJhbm5lci03OTR4MzY2LTIwMjMtMTEtMDF0MTMzMjIxLTc4MS1qcGc.jpg"
            className="w-full"
          />
        </SwiperSlide>
      </Swiper>

      <div className="px-4 pt-6">
        <h1 className="text-2xl font-bold text-red-600">Hi, {user}!</h1>
        <p className="text-neutral-600 text-sm">
          Your hassle-free ride is just a tap away.
        </p>
      </div>

      <div className="flex gap-4 px-4 pt-6">
        <div className="p-4 bg-neutral-100 w-full rounded-lg shadow-md flex">
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
        <div className="p-4 bg-neutral-100 w-full rounded-lg shadow-md flex">
          <div className="w-full">
            <p className="text-neutral-800 text-sm">Use Points</p>
            <p className="text-neutral-800 text-sm font-bold text-lg">916</p>
          </div>
          <div class="flex justify-end items-end">
            <div>
              <p class="text-neutral-800 text-2xl">🪙</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between px-4 pt-8">
        <Link to="/address">
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
        </Link>

        <svg
          width="60"
          height="60"
          viewBox="0 0 98 98"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="goride">
            <rect
              id="Rectangle 17"
              width="98"
              height="98"
              rx="24"
              fill="#E0FBD2"
            />
            <g id="Group 1">
              <circle
                id="Ellipse 1"
                cx="26.5115"
                cy="66.7342"
                r="10.4465"
                fill="#00880C"
              />
              <circle
                id="Ellipse 2"
                cx="72.5535"
                cy="67.8949"
                r="10.4465"
                fill="#00880C"
              />
              <path
                id="Vector 1"
                d="M16.6455 44.6804C17.2207 47.7752 17.9843 46.6787 17.9997 47.0019C17.2259 47.9691 15.8717 49.2846 15.0979 51.4513C14.3241 53.618 18.3866 54.9334 18.5801 54.74C18.7735 54.5466 21.0562 52.612 27.092 52.612C33.1277 52.612 39.4085 58.996 39.8599 60.7371C40.6337 61.5109 40.8272 66.9276 39.8599 70.7966H48.7588H59.0118C58.5604 69.507 57.9285 66.0377 59.0118 62.4781C60.0952 58.9186 65.1378 54.8045 67.5238 53.1924C67.5238 53.1924 72.747 53.1924 74.1012 52.612C75.4554 52.0317 75.9196 52.0704 77.003 51.4513C78.0863 50.8323 77.8413 48.743 77.5833 47.7757L74.1012 39.6506L69.4583 33.6536L63.4613 28.6238C63.4613 28.6238 65.0089 29.7845 65.5892 29.2042C66.1695 28.6238 66.1696 28.0434 66.1696 28.0434C66.1696 28.0434 66.363 25.5286 65.3958 23.7875C64.4285 22.0464 61.5267 19.9184 61.5267 19.9184C61.5267 19.9184 57.6577 18.5642 56.6904 19.1446C55.7231 19.7249 55.3362 21.466 55.3362 21.466L55.7231 24.3678C55.7231 24.3678 52.4344 23.594 51.854 23.7875C51.2737 23.981 50.4998 25.5672 50.4998 26.4958C50.4998 27.4244 51.1447 27.9145 51.854 28.0434L56.6904 28.6238L57.6576 32.106L59.5922 39.6506L60.5595 47.0019L59.0118 55.5138C57.9156 56.997 55.3362 60.1567 55.3362 60.1567C55.3362 60.1567 53.0148 61.124 49.7261 60.7371C47.0951 60.4275 46.0504 57.6418 45.857 56.2876V50.8709C46.8243 50.742 48.9522 50.7549 49.7261 50.2906C50.2126 49.9987 50.852 48.7738 51.2598 47.9045C51.5379 47.3117 51.6883 46.6698 51.7426 46.0172C51.8169 45.1261 51.9231 44.2375 51.9647 43.3443C51.9986 42.6158 51.9957 41.7196 51.854 41.0048C51.4026 40.36 50.6934 40.0375 48.7588 39.2637C46.8242 38.4899 36.3777 38.103 36.3777 38.103C36.3777 38.103 25.9313 38.2964 23.2229 39.2637C21.0563 40.0375 19.1604 40.6179 19.1604 40.6179C19.1604 40.6179 16.0703 41.5856 16.6455 44.6804Z"
                fill="#00880C"
              />
            </g>
          </g>
        </svg>

        <svg
          width="60"
          height="60"
          viewBox="0 0 98 98"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="gomart">
            <rect
              id="Rectangle 19"
              width="98"
              height="98"
              rx="24"
              fill="#FFE1DF"
            />
            <g id="gomart-icon">
              <path
                id="Vector 8"
                d="M54.7346 28.2338C47.004 28.062 35.7661 28.878 31.1134 29.3074L30.0398 24.1537C29.8966 23.8674 29.3096 22.8653 28.1071 21.1474C26.9046 19.4295 25.1724 19 24.4566 19H20.806C19.6035 19 19.1597 20.4316 19.0881 21.1474C18.8734 22.4358 18.9163 25.1415 20.806 25.6569C22.6957 26.1722 23.3113 26.7306 23.3829 26.9453C24.5281 32.8864 27.0764 46.014 28.1071 50.9959C29.1378 55.9779 32.4019 59.3707 33.905 60.4444C34.8356 61.1602 38.3286 62.7636 44.8567 63.4507C53.0167 64.3097 62.2504 63.0213 66.7599 61.9476C71.2694 60.8739 74.6395 55.7684 74.92 54.6465C75.1347 53.7875 79 34.8906 79 33.1727C79 31.7984 76.8526 29.7369 75.7789 29.3074C71.9852 29.0211 62.4652 28.4055 54.7346 28.2338Z"
                fill="#EE2737"
              />
              <rect
                id="Rectangle 18"
                x="42.6211"
                y="36.6085"
                width="4.72423"
                height="18.4675"
                rx="2.36212"
                fill="#FFE1DF"
              />
              <rect
                id="Rectangle 19_2"
                x="56.3644"
                y="36.6085"
                width="4.72423"
                height="18.4675"
                rx="2.36212"
                fill="#FFE1DF"
              />
              <ellipse
                id="Ellipse 11"
                cx="40.0442"
                cy="72.6844"
                rx="5.58319"
                ry="5.58319"
                fill="#EE2737"
              />
              <ellipse
                id="Ellipse 12"
                cx="61.9476"
                cy="72.6844"
                rx="5.58319"
                ry="5.58319"
                fill="#EE2737"
              />
            </g>
          </g>
        </svg>

        <svg
          width="60"
          height="60"
          viewBox="0 0 98 98"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="gosend">
            <rect
              id="Rectangle 18"
              width="98"
              height="98"
              rx="24"
              fill="#E0FBD2"
            />
            <g id="gosend-icon">
              <path
                id="Polygon 3"
                d="M43.1441 18.2739C46.783 16.2395 51.217 16.2395 54.8559 18.2739L73.1668 28.5112C76.9606 30.6322 79.3109 34.6389 79.3109 38.9853V58.7995C79.3109 63.1459 76.9606 67.1526 73.1668 69.2737L54.8559 79.5109C51.217 81.5453 46.783 81.5453 43.1441 79.5109L24.8332 69.2736C21.0394 67.1526 18.6891 63.1459 18.6891 58.7995V38.9853C18.6891 34.6389 21.0394 30.6322 24.8332 28.5112L43.1441 18.2739Z"
                fill="#00880C"
              />
              <path
                id="Vector 7"
                d="M31.2626 34.9707C33.3167 32.1133 50.6217 24.0035 58.8198 20.4829L69.1126 26.2383C61.3512 30.0635 45.2461 38.0118 42.9168 39.2037C40.5874 40.3956 40.2539 42.9144 40.3783 44.0249L40.141 55.3198L34.7903 46.3447L29.1792 49.772C29.2598 45.9332 29.2541 37.7646 31.2626 34.9707Z"
                fill="#E0FBD2"
              />
            </g>
          </g>
        </svg>
      </div>

      <div className="flex justify-between px-4 pt-8">
        <svg
          width="60"
          height="60"
          viewBox="0 0 98 98"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="gotagihan">
            <rect
              id="Rectangle 20"
              width="98"
              height="98"
              rx="24"
              fill="#D3F4FB"
            />
            <g id="gotagihan-icon">
              <rect
                id="Rectangle 20_2"
                x="27"
                y="19"
                width="43.5669"
                height="60"
                rx="12"
                fill="#00ADD6"
              />
              <rect
                id="Rectangle 21"
                x="32.7324"
                y="24.7325"
                width="32.1019"
                height="38.2166"
                rx="10"
                fill="#D3F4FB"
              />
              <ellipse
                id="Ellipse 13"
                cx="48.7835"
                cy="69.4458"
                rx="3.43949"
                ry="3.43949"
                fill="#D3F4FB"
              />
              <path
                id="Vector 10"
                d="M48.9744 33.5223V41.3567H54.898L48.7834 53.7771L48.5923 45.3694H42.6687L48.9744 33.5223Z"
                fill="#00ADD6"
              />
            </g>
          </g>
        </svg>

        <svg
          width="60"
          height="60"
          viewBox="0 0 98 98"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 8">
            <rect
              id="Rectangle 17"
              width="98"
              height="98"
              rx="24"
              fill="#FFE1DF"
            />
            <g id="Group 7">
              <path
                id="Vector 4"
                d="M62.341 72.6576L61.4366 61.0811C61.4366 60.2128 60.3513 58.3075 59.8087 58.006C59.0851 57.6443 57.2763 56.4866 55.8292 54.7501C54.0204 52.5795 52.9351 50.0472 52.3925 46.7913C51.8498 43.5354 53.4777 37.928 53.6586 36.8427C53.8395 35.7574 56.9145 29.7883 59.0851 26.8941C60.8216 24.5788 63.5469 24 64.6925 24C65.5969 24.0603 67.5505 23.8553 69.5764 24.7235C72.1087 25.8088 73.5558 28.3412 75.7264 31.778C77.4629 34.5274 78.6205 40.8221 78.9823 43.5354C79.0426 44.6207 78.9823 47.2978 78.2587 50.0472C77.5352 52.7966 76.269 54.3281 75.7264 54.7501C75.0028 55.2928 73.8814 56.161 72.2896 57.4634C70.6978 58.7658 69.8175 60.4781 69.9381 60.9002L69.3955 72.4767C69.3352 73.562 68.0569 74.8282 67.044 74.8282H64.8734C63.4263 74.8282 62.6425 73.5017 62.341 72.6576Z"
                fill="#EE2737"
              />
              <path
                id="Vector 5"
                d="M29.6721 71.9453C29.5274 71.5111 29.25 65.132 29.1294 61.9967C28.658 60.4645 27.7365 59.1097 26.4848 58.1083L24.7883 56.7511C24.2456 56.329 22.7624 54.9061 21.1706 52.5908C19.5788 50.2755 19.1206 45.7775 19 43.7275L19.9742 31.3417C20.1571 29.0161 21.3973 26.1889 23.703 26.5436C25.5841 26.833 26.778 28.5333 26.5971 29.2568L25.8735 41.5569C25.753 41.8584 25.7409 43.5466 27.6824 43.5466C29.4912 43.5466 29.7324 42.5819 29.6721 41.5569L29.9384 29.9736C29.9997 27.3076 31.0012 23.7167 33.6515 24.0112C33.8396 24.0321 34.0174 24.086 34.1846 24.1654C36.1122 25.0803 35.9508 27.8093 35.9287 29.9429C35.88 34.6591 36.0193 40.8821 36.3648 41.9187C36.483 42.2732 36.7067 42.6269 36.9818 42.9564C38.183 44.3947 39.4856 43.6587 40.5251 42.0995C41.3069 40.9269 40.6808 34.3868 40.1522 30.3228C40.0462 29.5074 40.1658 28.6787 40.5103 27.9322C40.8712 27.1504 41.483 26.4729 42.3304 26.3203C43.1246 26.1772 44.0809 26.2009 44.8663 26.7245C46.1686 27.5927 46.4942 29.498 46.4942 30.3421L47.3987 39.9289C47.3987 42.5819 47.1454 48.6113 46.1325 51.5055C45.1195 54.3996 43.4192 55.8467 42.6957 56.3893C41.7913 57.0525 40.2434 57.9228 39.078 58.9217C37.8119 60.007 37.028 61.032 37.0883 61.9967C37.0883 65.0114 37.2123 71.7799 36.003 73.3923C34.3751 75.5629 32.5662 74.8394 32.2045 74.8394C30.2066 74.8394 29.853 72.4879 29.6721 71.9453Z"
                fill="#EE2737"
              />
            </g>
          </g>
        </svg>

        <svg
          width="60"
          height="60"
          viewBox="0 0 95 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 23">
            <rect
              id="Rectangle 34"
              width="95"
              height="95"
              rx="24"
              fill="#F9E0FE"
            />
            <g id="Group 22">
              <path
                id="Union"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M47.7012 18C43.9946 18 41.8325 20.5247 41.2147 21.7871C36.2726 33.7794 26.2032 60.0364 25.4619 69.1253C24.7206 78.2143 32.5661 78.593 36.5815 77.6462L47.7012 71.9656L58.8208 77.6462C62.8362 78.593 70.6818 78.2143 69.9404 69.1253C69.1991 60.0364 59.1297 33.7794 54.1876 21.7871C53.5699 20.5247 51.4077 18 47.7012 18Z"
                fill="#87027B"
              />
              <path
                id="Vector 15"
                d="M68.6032 51.9832L63.7842 38.0328C63.5846 37.4549 63.9447 36.8348 64.5525 36.7692C68.2424 36.3708 74.3798 36.9054 76.3779 41.669C78.3999 46.4895 73.4259 50.6316 69.9523 52.5301C69.4323 52.8143 68.7966 52.5433 68.6032 51.9832Z"
                fill="#87027B"
              />
              <path
                id="Vector 16"
                d="M26.2425 51.9832L31.0615 38.0328C31.2611 37.4549 30.901 36.8348 30.2932 36.7692C26.6033 36.3708 20.4659 36.9054 18.4678 41.669C16.4458 46.4895 21.4198 50.6316 24.8934 52.5301C25.4135 52.8143 26.0491 52.5433 26.2425 51.9832Z"
                fill="#87027B"
              />
            </g>
          </g>
        </svg>

        <svg
          width="60"
          height="60"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="more">
            <circle id="Ellipse 18" cx="40" cy="40" r="40" fill="#EDEDED" />
            <circle id="Ellipse 19" cx="29" cy="30" r="9" fill="#646363" />
            <circle id="Ellipse 20" cx="50" cy="30" r="9" fill="#646363" />
            <circle id="Ellipse 21" cx="29" cy="51" r="9" fill="#646363" />
            <circle id="Ellipse 22" cx="50" cy="51" r="9" fill="#646363" />
          </g>
        </svg>
      </div>

      <div className="px-4 pt-6">
        <h1 className="text-xl font-bold text-neutral-800">Recomendations</h1>
        <p className="text-neutral-600 text-sm">
          Uncover perfect ride just for you!
        </p>
      </div>

      <div className="px-4 py-4">
        <article className="overflow-hidden rounded-xl shadow-md border border-1 mb-6">
          <img
            alt="Office"
            src="https://images.unsplash.com/photo-1600846309541-420e33acda4e?auto=format&fit=crop&q=80&w=1632&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-36 w-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">
                Gelora Bung Karno - Senayan
              </h3>
            </a>

            <p className="mt-2 line-clamp-2 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>
          </div>
        </article>

        <article className="overflow-hidden rounded-xl shadow-md border border-1 mb-6">
          <img
            alt="Office"
            src="https://images.unsplash.com/photo-1659919698063-b17eac78af27?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-36 w-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">
                Stasiun Manggarai
              </h3>
            </a>

            <p className="mt-2 line-clamp-2 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>
          </div>
        </article>

        <article className="overflow-hidden rounded-xl shadow-md border border-1 mb-6">
          <img
            alt="Office"
            src="https://images.unsplash.com/photo-1546012676-bbb9e1db0bdd?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-36 w-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">
                Central Park Mall
              </h3>
            </a>

            <p className="mt-2 line-clamp-2 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>
          </div>
        </article>

        <article className="overflow-hidden rounded-xl shadow-md border border-1 mb-6">
          <img
            alt="Office"
            src="https://images.unsplash.com/photo-1617687611017-48db8d42fd8f?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-36 w-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">
                Bundaran Hotel Indonesia
              </h3>
            </a>

            <p className="mt-2 line-clamp-2 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>
          </div>
        </article>
      </div>

      <div className="h-12 bg-white"></div>
    </>
  );
}
