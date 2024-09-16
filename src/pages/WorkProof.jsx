import axios from 'axios';
import React, { useEffect, useState } from 'react';
import p1 from '../assets/images/p1.png';
import p2 from '../assets/images/p2.png';
import p3 from '../assets/images/p3.png';

export default function WorkProof() {


  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const res = await axios.get(`${apiUrl}/api/website/portfolio/getPortfolioProjects`);
        setProjects(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }

    fetchProjects();
  }, []);

  return (
    <div className='flex flex-col items-center justify-center mt-16 px-4 md:px-8 text-white'>
      <h1 className='font-bold text-center font-sora text-xl md:text-2xl lg:text-3xl mb-8'>
        Explore What We Do.
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4'>
   

  
        {projects.map((project) => (
          <div key={project._id} className='relative group overflow-hidden rounded-lg shadow-md'>
            {/* Image */}
            <img
              src={project.coverImage}
              alt={project.projectName}
              className='w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110'
            />

            <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <h2 className='font-bold text-2xl font-sora'>{project.projectName}</h2>
              <p className='mt-2 text-sm'>{project.description}</p>

              <a href={`https://${project.demo}`} target="_blank" rel="noopener noreferrer">Demo</a>



            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
