import React from "react";

interface ExperienceComponentProps {
  title: string;
  company: string;
  location: string;
  image: string;
  colorBG: string;
  date: string;
  description: string;
  skills: string[];
}

const ExperienceComponent: React.FC<ExperienceComponentProps> = ({
  title,
  company,
  location,
  image,
  colorBG,
  date,
  description,
  skills,
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg overflow-hidden transition flex flex-col lg:flex-row h-full">
      {/* Image */}
      <div
        className="w-full lg:w-3/12 flex items-center justify-center p-4"
        style={{ backgroundColor: colorBG }}
      >
        <img
          src={`${import.meta.env.BASE_URL}img_experience/${image}`}
          alt={`${company} logo`}
          className="object-contain w-full h-auto max-h-40"
        />
      </div>

      {/* Konten utama */}
      <div className="w-full lg:w-9/12 p-4 flex flex-col">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h3>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          {company}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{location}</p>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{date}</p>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-blue-100 text-blue-800 text-md px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceComponent;