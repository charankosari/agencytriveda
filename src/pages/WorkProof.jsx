import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
export default function WorkProof() {

  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [modalMessage, setModalMessage] = useState(""); 
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const res = await axios.get(`${apiUrl}/api/website/portfolio/getPortfolioProjects`);
        setProjects(res.data);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }

    fetchProjects();
  }, []);

  const handleDemoClick = (demoLink) => {
    if (demoLink && demoLink !== "null") {
      window.open(`https://${demoLink}`, "_blank", "noopener noreferrer");
    } else {
      setModalMessage("Project Under Development This project demo is not yet available."); 
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage("");
  };

  return (
    <div className='flex flex-col items-center justify-center mt-16 px-4 md:px-8 text-white'>
      <h1 className='font-bold text-center font-sora text-xl md:text-2xl lg:text-3xl mb-8'>
        Explore What We Do.
      </h1>
      {loading ? (
        <Spinner/>
      ):(

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
              <h2 className='font-bold md md:text-xl font-sora'>{project.projectName}</h2>
              <p className='mt-2 text-sm'>{project.description}</p>

              <button
                className="mt-4 px-4 py-2 bg-rose-600 rounded-full bg-opacity-20 backdrop-blur-sm text-white font-semibold hover:bg-opacity-30 transition"
                onClick={() => handleDemoClick(project.demo)}
              >
                Demo
              </button>
            </div>
          </div>
        ))}
      </div>
      )}
   

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-sm mx-auto text-gray-100">
            <h2 className="text-xl font-semibold mb-4">Notice</h2>
            <p>{modalMessage}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
