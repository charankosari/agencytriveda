import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    async function fetchProjects() {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const res = await axios.get(`${apiUrl}/api/website/portfolio/getPortfolioProjects`);
        setProjects(res.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setIsLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const handleDemoClick = (demoLink) => {
    if (demoLink && demoLink !== "null") {
      window.open(`https://${demoLink}`, "_blank", "noopener noreferrer");
    } else {
      setModalMessage("Project Under Development. This project demo is not yet available.");
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage("");
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="min-h-screen bg-black text-white font-sora">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-bold text-center text-3xl md:text-4xl lg:text-5xl mb-4 text-textPrimary animate-fadeIn">
          Portfolio
        </h1>
        <p className="text-center mb-8 animate-fadeIn">
          "At Triveda, we are committed to crafting digital excellence, where our work truly speaks for itself."
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-light cursor-pointer text-gray-100 shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 flex flex-col justify-between border-1px"
              style={{ minHeight: '300px' }} 
            >
              <img
                src={project.coverImage}
                alt={project.projectName}
                className="w-full h-48 sm:h-64 md:h-72 lg:h-72 object-cover  border-stone-950 border-opacity-10"
              />
              <div className="p-4 sm:p-6 flex-grow">
                <h2 className="text-left font-bold text-xl sm:text-2xl mb-2">{project.projectName}</h2>
                <p
                  className="text-left text-gray-500 overflow-hidden max-h-20 overflow-ellipsis"
                  style={{ WebkitLineClamp: 3, display: '-webkit-box', WebkitBoxOrient: 'vertical' }}
                >
                  {project.description}
                </p>
              </div>

             
              <div className="p-4 sm:p-6 flex justify-between items-center">
                <button
                  className="px-6 py-3 border-2 border-rose-500 rounded-full text-white font-semibold transition duration-300 ease-in-out transform hover:scale-105"
            
                >
                  {project.
                    category}
                </button>
                <button
                  className="px-6 py-3 bg-rose-500 rounded-full text-white font-semibold transition duration-300 ease-in-out transform hover:scale-105"
                  onClick={() => handleDemoClick(project.demo)}
                >
                  View Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for unavailable demos */}
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
