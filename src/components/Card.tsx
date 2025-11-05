import React from "react";

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-slate-900 transition-colors duration-300 p-6 m-4">
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;