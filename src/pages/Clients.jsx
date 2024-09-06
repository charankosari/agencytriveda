import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import l1 from '../assets/images/tesla-logo.png'

const Clients = () => {
    const clients = [
        {name: "Tesla",logo:l1},
        {name: "Apple",logo:l1},
        {name: "Tesla",logo:l1},
        {name: "Tesla",logo:l1},
        {name: "Apple",logo:l1},
        {name: "Tesla",logo:l1},
        {name: "Apple",logo:l1}
    ];

    return (
        <div className="bg-gray-950 py-4 mt-12">
            <h1 className='font-bold text-center font-sora text-xl md:text-2xl lg:text-3xl mb-8 text-white'>
                Our Clients
            </h1>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                speed={3000}
                modules={[Autoplay]}
                breakpoints={{
                    1024: { slidesPerView: 5 },
                    600: { slidesPerView: 3 },
                    480: { slidesPerView: 2 },
                }}
            >
                {clients.map((client, index) => (
                    <SwiperSlide key={index} className="text-rose-400 font-semibold text-lg text-center">
                      <div className='flex flex-col items-center justify-center gap-1 md:gap-2 lg:gap-4'>
                      <div>
                            <img src={client.logo} className=' bg-cyan-50 w-20 h-20 md:w-40 md:h-40'></img>
                        </div>
                        <div>
                        {client.name}
                        </div>
                      </div>
               
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Clients;
