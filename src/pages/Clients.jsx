import React from 'react';

const Clients = () => {
    const clients = [
        "Google", "Tesla", "Nvidia", "Apple", 
    ];

    return (
        <div className="relative overflow-hidden bg-gray-950 py-4 mt-12">
            <h1 className='font-bold text-center font-sora text-xl md:text-2xl lg:text-3xl mb-8'>
                Our Clients
            </h1>
            <div className="absolute inset-0 left-0 right-auto bg-gradient-to-r from-gray-950 to-transparent opacity-40 pointer-events-none"></div>
            <div className="absolute inset-0 right-0 left-auto bg-gradient-to-l from-gray-950 to-transparent opacity-40 pointer-events-none"></div>

            <div className="relative flex items-center mt-12">
                <div className="flex space-x-8 animate-scroll">
                    {clients.concat(clients).map((client, index) => (
                        <div key={index} className="text-rose-400 font-semibold text-lg whitespace-nowrap">
                            {client}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Clients;
