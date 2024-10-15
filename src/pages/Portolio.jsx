import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import Footer from "./Footer";
import Hook from "./Hook";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All"); // New state for filtering

  useEffect(() => {
    async function fetchProjects() {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const res = await axios.get(
          `${apiUrl}/api/website/portfolio/getPortfolioProjects`
        );
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
      setModalMessage(
        "Project Under Development. This project demo is not yet available."
      );
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage("");
  };

  // Filter logic based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category.trim() === selectedCategory
        );
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="min-h-screen bg-black text-white font-sora">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-bold text-center text-3xl md:text-4xl lg:text-5xl mb-4 text-textPrimary animate-fadeIn">
            Portfolio
          </h1>
          <p className="text-center font-inter mb-8 animate-fadeIn">
            "At Triveda, we are committed to crafting digital excellence, where
            our work truly speaks for itself."
          </p>

          {/* Filter Options */}
          <div className="flex flex-wrap justify-center mb-8 font-body">
            <button
              className={`px-4 py-2 m-2 ${
                selectedCategory === "All"
                  ? "bg-rose-500"
                  : "bg-light border border-borderColor border-opacity-35 "
              } rounded-full text-white`}
              onClick={() => setSelectedCategory("All")}
            >
              All
            </button>
            <button
              className={`px-4 py-2 m-2 ${
                selectedCategory === "Web Development"
                  ? "bg-rose-500"
                  : "bg-light border border-borderColor border-opacity-35 "
              } rounded-full text-white`}
              onClick={() => setSelectedCategory("Web Development")}
            >
              Web Development
            </button>
            <button
              className={`px-4 py-2 m-2 ${
                selectedCategory === "App development"
                  ? "bg-rose-500"
                  : "bg-light border border-borderColor border-opacity-35 "
              } rounded-full text-white`}
              onClick={() => setSelectedCategory("App development")}
            >
              App Development
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-light cursor-pointer text-gray-100 shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 flex flex-col justify-between  border border-borderColor border-opacity-35"
                style={{ minHeight: "300px" }}
              >
                <img
                  src={project.coverImage}
                  alt={project.projectName}
                  className="w-full h-48 sm:h-64 md:h-72 lg:h-72 object-cover  border-stone-950 border-opacity-10"
                />
                <div className="p-4 sm:p-6 flex-grow">
                  <h2 className="text-left font-bold text-xl sm:text-2xl mb-2">
                    {project.projectName}
                  </h2>
                  <p
                    id={`expandable-text-${index}`}
                    className="text-left text-gray-500 font-body overflow-hidden"
                    style={{
                      maxHeight: "75px",
                      overflow: "auto",
                      textOverflow: "ellipsis",
                    }}
                    onMouseOver={(e) => (e.target.style.overflow = "auto")}
                    onMouseOut={(e) => (e.target.style.overflow = "hidden")}
                    onClick={(e) => (e.target.style.overflow = "auto")}
                  >
                    {project.description}
                  </p>
                </div>
                <div className="p-4 sm:p-6 flex justify-between items-center">
                  <button className="px-2 py-2 md:px-6 md:py-3 border border-borderColor border-opacity-65 rounded-full text-white text-xs md:text-md">
                    {project.category}
                  </button>
                  <button
                    className="px-2 py-2 md:px-6 md:py-3 bg-rose-500 rounded-full text-white text-xs md:text-md font-semibold transition duration-300 ease-in-out transform hover:scale-105"
                    onClick={() => handleDemoClick(project.demo)}
                  >
                    Demo
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
      <Hook />
      <Footer></Footer>
    </>
  );
}
