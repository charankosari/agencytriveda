import React from 'react';
import Logo from '../assets/images/land.png';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Hero() {
    return (
        <div className="min-h-96 flex items-center justify-center ">
            <div className="flex flex-col md:flex-row items-center justify-center w-full  md:px-8 lg:px-6 py-8 font-sora">
                {/* Left section: Text content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
                    <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
                        Triveda
                    </h1>
                    <h2 className="text-gray-300 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                        Crafting Custom Solutions from Vision to Victory
                    </h2>
                    <p className="text-gray-300 text-sm sm:text-lg md:text-xl lg:text-xl max-w-lg leading-relaxed">
                        Triveda turns your vision into reality with custom solutions that drive success and innovation.
                    </p>
                    <div className="flex mt-6 space-x-4">
                        <Link to='/portfolio'>
                            <Button label="See Our Work" className="hover:bg-opacity-80 transition ease-in-out duration-300" />
                        </Link>
                        <Link to='/contact'>
                            <Button label="Contact Us" className="hover:bg-opacity-80 transition ease-in-out duration-300" />
                        </Link>
                    </div>
                </div>

                {/* Right section: Image */}
                <div className="w-full lg:w-1/2 flex justify-center mt-8 md:mt-0">
                    <img
                        src={Logo}
                        alt="Triveda Logo"
                        className="w-[300px] md:w-[400px] lg:w-[500px] animate-float"
                    />
                </div>
            </div>
        </div>
    );
}
