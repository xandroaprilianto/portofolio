import React from "react";
import { FaGithub} from 'react-icons/fa';

interface CardProjectProps {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  skills: string[];
  // linkDetail: string;
  linkSource: string;
}

const CardProject: React.FC<CardProjectProps> = ({
  title,
  category,
  description,
  imageUrl,
  skills,
  // linkDetail,
  linkSource,
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg overflow-hidden transition flex flex-col h-full">
      <img
        src={`${import.meta.env.BASE_URL}img_project/${imageUrl}`}
        alt={title}
        className="w-full h-58 object-cover"
      />

     
      <div className="p-4 flex-grow flex flex-col">
        <span className="text-xs uppercase font-semibold text-blue-600 dark:text-blue-400 mb-1">
          {category.replace("-", " ")}
        </span>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-blue-100 text-blue-800 text-md font-semibold px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

     
      <div className="p-4 pt-0 flex gap-2">
        {/* <a
          href={linkDetail}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Lihat Detail
        </a> */}
        <a
          href={linkSource}
          target="_blank"
          rel="noopener noreferrer"
          // className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition"
          className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition flex items-center gap-2"
        >
          <FaGithub className="text-1xl text-gray-200 dark:text-gray-200 hover:text-black dark:hover:text-white transition" /> Source Code
        </a>
      </div>
    </div>
  );
};

export default CardProject;