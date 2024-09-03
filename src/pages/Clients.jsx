import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const Clients = () => {
    const clients = [
        "Google", "Tesla", "Nvidia", "Apple", "Microsoft", "Amazon", "Facebook", "IBM", "Intel", "Adobe"
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
                        {client}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Clients;
