import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { ServicesAtom } from '../store/store';
import axios from 'axios';

export default function ServicesDes() {
  const service = useRecoilValue(ServicesAtom);
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const res = await axios.get(`${apiUrl}/api/website/portfolio/getPortfolioProjects`);
        setProjects(res.data);

        // Filter projects based on the selected service's name
        const filtered = res.data.filter(project => project.category === service.serviceName);
        setFilteredProjects(filtered);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }

    fetchProjects();
  }, [service.serviceName]);

  return (
    <div className="p-4 md:p-customPadding min-h-screen flex flex-col bg-black">
      <div className="container mx-auto px-6 py-12">
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
      </div>
    </div>
  );
}
