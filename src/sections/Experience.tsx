import { useEffect, useState } from "react";
import ExperienceComponent from "../components/ExperienceComponent";

interface Experience {
  title: string;
  company: string;
  location: string;
  image: string;
  colorBG: string;
  date: string;
  description: string;
  skill: string[];
}
const Experience = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);

   useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/experience.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch experience.json");
        return res.json();
      })
      .then(setExperiences)
      .catch((err) => console.error("Error loading experience data:", err));
  }, []);



  return (
    <section id="experience" className="py-20 flex flex-col items-center justify-center px-4 sm:px-8 md:px-10 lg:px-20 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>
      <p className="text-center mb-10">A look at the companies and projects I’ve contributed to, where I’ve gained valuable experience ensuring software quality through testing, automation, and collaboration.</p>
       <div className="flex flex-col gap-10 w-full mx-auto">
      {experiences.map((item: Experience, index: number) => (
        
          <div className="w-full md:w-[80%] mx-auto">
            <ExperienceComponent
            key={index}
              title={item.title}
              company={item.company}
              location={item.location}
              image={item.image}
              colorBG={item.colorBG}
              date={item.date}
              description={item.description}
              skills={item.skill}
            />
          </div>
      ))}
    </div>
    </section>
  );
};

export default Experience;