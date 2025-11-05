
import { useEffect, useState } from 'react';
import SkillComponent from '../components/SkillComponent';

interface Skill {
  skill: string;
  icon: string;
}

const Skills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/skills.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch skills.json");
        return res.json();
      })
      .then((data) => setSkills(data))
      .catch((err) => console.error("Error loading skills:", err));
  }, []);

  return (
    <section id="skills" className="py-30 flex flex-col bg-gray-100 dark:bg-slate-950  items-center justify-center xl:px-30 lg:px-20 md:px-20 sm:px-5 max-w-full mx-auto">
      <h2 className="text-4xl font-bold text-center">My Skills</h2>
      <p className="text-center px-10 text-gray-600 dark:text-gray-300 mb-12 max-w-xl mx-auto">
        These are some of the technologies I regularly use to build projects.
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 px-20 gap-6 w-full">
        {skills.map((skill: Skill, index) => (
          <SkillComponent
            key={index}
            skill={skill.skill}
            icon={skill.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;