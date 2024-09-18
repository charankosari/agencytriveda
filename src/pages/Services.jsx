import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';


import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Services() {

  const navigate = useNavigate();
  const [dat, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const res = await axios.get(`${apiUrl}/api/website/services/getServices`);
        setData(res.data); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      }
    }
    fetchData();
  }, []);

  const handleService = (value) => {

    navigate(`/servicedescription/${value}`);
  };

  return (
    <div className='flex flex-col items-center justify-center mt-16 px-4 md:px-8 text-white'>
      <h1 className='font-bold text-center font-sora text-xl md:text-2xl lg:text-3xl mb-8'>
        Services We Offer
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 py-4 w-full'>
        {dat.length > 0 ? (
          dat.map((item) => (
            <div
              key={item._id} 
              className='bg-light shadow-md rounded-lg p-4 flex items-center border border-borderColor border-opacity-35 justify-center text-center h-20 lg:h-[100px]  cursor-pointer'
              onClick={() => handleService(item._id)}
            >
              <h2 className='font-bold text-lg font-sora'>{item.serviceName}</h2>
            </div>
          ))
        ) : (
          <div>{error ? "Error loading services." : "Loading services..."}</div>
        )}
      </div>

      <div className='flex items-center justify-between w-full font-sora mt-4'>
        <h4 className='font-semibold w-40 md:w-80'>Have an idea? Let’s make it happen!</h4>
        <Link to='/contact'>
          <Button label="Contact us" />
        </Link>
      </div>
    </div>
  );
}
