import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { useParams } from 'react-router-dom';

export default function ServicesDes() {
  const [service, setService] = useState(null);
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
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
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;

        const serviceResponse = await axios.get(`${apiUrl}/api/website/services/getOne/${id}`);
        const fetchedService = serviceResponse.data;
        setService(fetchedService);

        const projectResponse = await axios.get(`${apiUrl}/api/website/portfolio/getPortfolioProjects`);
        const fetchedProjects = projectResponse.data;
        setProjects(fetchedProjects);

        const filtered = fetchedProjects.filter(project => project.category === fetchedService.serviceName);
        setFilteredProjects(filtered);

      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  return (
    <div className="px-2 py-3 md:px-customPadding min-h-screen flex flex-col bg-black">
      {loading ? (
        <Spinner />
      ) : (
        <div className="container mx-auto px-6 py-12">
          {service ? (
            <>
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-textPrimary">
                {service.serviceName}
              </h1>
              <p className="mb-8 text-gray-400">
                {service.serviceDescription}
              </p>

              {/* Display Filtered Projects */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project) => (
                    <div key={project._id} className="bg-slate-900 shadow-md rounded-lg p-4 flex flex-col">
                      <img
                        src={project.coverImage}
                        alt={project.projectName}
                        className="w-full h-60 object-cover mb-4 rounded-lg"
                      />
                      <h3 className="text-xl font-bold mb-2 text-white">
                        {project.projectName}
                      </h3>
                      <p className="text-gray-400  overflow-hidden mb-4">
                        {project.description}
                      </p>
                      <div className="mt-auto flex justify-start">
                        <button
                          className="px-4 py-2 md:px-6 md:py-3 bg-rose-500 rounded-full text-white text-xs md:text-md font-semibold transition duration-300 ease-in-out transform hover:scale-105"
                          onClick={() => handleDemoClick(project.demo)}
                        >
                          Demo
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-gray-400">No projects available for this service.</div>
                )}
              </div>
            </>
          ) : (
            <div className="text-gray-400">Service not found.</div>
          )}
        </div>
      )}

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
