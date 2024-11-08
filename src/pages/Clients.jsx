import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const Clients = () => {
  const [clients, setClients] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    async function getData() {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;

        const res = await axios.get(`${apiUrl}/api/website/clients/getAllClientCompanies`);
        setClients(res.data);

        if (swiperRef.current) {
          swiperRef.current.swiper.update();
          swiperRef.current.swiper.autoplay.start();
        }
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  return (
    <div className="bg-black py-8 px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32 mt-12">
      <h1 className="font-bold text-center font-sora text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-8 text-white">
        Our Clients
      </h1>
      <Swiper
        ref={swiperRef} // Attach ref to Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        speed={3000}
        modules={[Autoplay]}
        breakpoints={{
          480: { slidesPerView: 1 }, // for small devices (mobile)
          600: { slidesPerView: 2 }, // for tablets
          1024: { slidesPerView: 2 }, // for larger screens
          1440: { slidesPerView: 2 }, // for wide screens
        }}
      >
        {clients.length > 0 ? (
          clients.map((client, index) => (
            <SwiperSlide key={index} className="text-rose-400 font-semibold text-lg text-center">
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="rounded-md">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="bg-cyan-50 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 object-cover rounded-md shadow-md"
                  />
                </div>
                <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium mt-2">{client.name}</p>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <div className="text-white text-center">No clients available.</div>
        )}
      </Swiper>
    </div>
  );
};

export default Clients;
