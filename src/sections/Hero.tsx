import { FaGithub, FaLinkedin, FaChevronDown } from 'react-icons/fa';
// import { SiLeetcode } from 'react-icons/si';

const Hero = () => {
  return (
    <section id="#" className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Alexandro <span className="text-blue-500">Aprilianto</span>
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl">
        A Software Quality Assurance Engineer passionate about ensuring high-quality software through meticulous testing and continuous improvement.
      </p>

      {/* Social Icon Cards */}
      <div className="flex gap-6 mt-6">
        {/* GitHub */}
        <a
          href="https://github.com/xandroaprilianto"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-lg shadow-md bg-white dark:bg-slate-800 hover:shadow-lg transition"
        >
          <FaGithub className="text-2xl text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/alexandroaprilianto/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-lg shadow-md bg-white dark:bg-slate-800 hover:shadow-lg transition"
        >
          <FaLinkedin className="text-2xl text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition" />
        </a>

        {/* LeetCode */}
        {/* <a
          href="https://leetcode.com/username"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-lg shadow-md bg-white dark:bg-slate-800 hover:shadow-lg transition"
        >
          <SiLeetcode className="text-2xl text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 transition" />
        </a> */}

        {/* Medium */}
        {/* <a
          href="https://medium.com/@username"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-lg shadow-md bg-white dark:bg-slate-800 hover:shadow-lg transition"
        >
          <FaMediumM className="text-2xl text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition" />
        </a> */}

       
      </div>
      <div className="mt-80 flex justify-center items-center">
       <a href="#about" className="flex flex-col  items-center animate-bounce text-blue-500 hover:text-blue-700 transition">
        <FaChevronDown className="text-2xl"/>
        <FaChevronDown className="text-4xl"/>
      </a>
      </div>
    </section>
  );
};

export default Hero;