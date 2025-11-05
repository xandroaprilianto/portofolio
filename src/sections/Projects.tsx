import { useEffect, useState } from "react";
import CardProject from "../components/CardProject";


interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  link_detail: string;
  link_source: string;
  skill: string[];
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("all");

   useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/projects.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch projects.json");
        return res.json();
      })
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error loading project data:", err));
  }, []);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project: Project) => project.category === activeCategory);

return (
<section
  id="project"
  className="py-20 flex flex-col items-center justify-center px-10 lg:px-50 md:px-5 sm:px-8 max-w-full mx-auto"
>
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <p className="text-center mb-10">A showcase of my personal projects and professional experience</p>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 rounded-md border text-sm font-medium transition-all duration-300
            ${activeCategory === "all"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-blue-600 border-blue-600 hover:bg-blue-50"}`}
        >
          All Projects
        </button>

        <button
          onClick={() => setActiveCategory("featured-projects")}
          className={`px-4 py-2 rounded-md border text-sm font-medium transition-all duration-300
            ${activeCategory === "featured-projects"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-blue-600 border-blue-600 hover:bg-blue-50"}`}
        >
          Featured Projects
        </button>

        <button
          onClick={() => setActiveCategory("practice-projects")}
          className={`px-4 py-2 rounded-md border text-sm font-medium transition-all duration-300
            ${activeCategory === "practice-projects"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-blue-600 border-blue-600 hover:bg-blue-50"}`}
        >
          Practice Projects
        </button>
      </div>

       {/* Project Cards */}
       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 w-full">
        {filteredProjects.map((project: Project, index: number) => (
          <CardProject
            key={index}
            title={project.title}
            category={project.category}
            description={project.description}
            imageUrl={project.image}
            skills={project.skill}
            // linkDetail={project.link_detail}
            linkSource={project.link_source}
          />
        ))}
      </div>
    </section>
);
};

export default Projects;