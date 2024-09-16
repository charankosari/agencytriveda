import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { useParams } from 'react-router-dom';

export default function ServicesDes() {
  const [service, setService] = useState(null);  // Initialize service as null
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();  // useParams does not take any arguments

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        
        // Fetch the service data
        const serviceResponse = await axios.get(`${apiUrl}/api/website/services/getOne/${id}`);
        const fetchedService = serviceResponse.data;
        setService(fetchedService);

        // Fetch all projects
        const projectResponse = await axios.get(`${apiUrl}/api/website/portfolio/getPortfolioProjects`);
        const fetchedProjects = projectResponse.data;
        setProjects(fetchedProjects);

        // Filter projects based on the service's name
        const filtered = fetchedProjects.filter(project => project.category === fetchedService.serviceName);
        setFilteredProjects(filtered);

      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);  // Ensure loading is stopped after data is fetched
      }
    }

    fetchData();
  }, [id]);  // The effect should depend on `id` changing

  return (
    <div className="p-4 md:p-customPadding min-h-screen flex flex-col bg-black">
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
                    <div key={project._id} className="bg-slate-900 shadow-md rounded-lg p-4">
                      <img
                        src={project.coverImage}
                        alt={project.projectName}
                        className="w-full h-60 object-cover mb-4 rounded-lg"
                      />
                      <h3 className="text-xl font-bold mb-2 text-white">
                        {project.projectName}
                      </h3>
                      <p className="text-gray-400">
                        {project.description}
                      </p>
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
    </div>
  );
}
