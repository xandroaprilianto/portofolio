import Card from "../components/Card";

const About = () => {
    return (
        <section id="about" className="py-20 px-6 sm:px-8 bg-gray-100 dark:bg-slate-950">
            <div className="max-w-6xl mx-auto text-center my-4">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="text-gray-700 dark:text-gray-300">
                Software Quality Assurance Engineer with hands-on experience in manual and automated testing of web-based applications across various platforms. 
                Proficient in designing and executing test cases, API testing, and implementing automation frameworks using tools such as Selenium Java, Katalon, Playwright and Postman. 
                Skilled in identifying defects, optimizing test processes, and ensuring high-quality software delivery. 
                Enjoys improving system reliability, collaborating with cross-functional teams, and driving continuous improvement in product quality.
                </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
                <Card
                    title="Quality Assurance Engineer"
                    description=""
                />
                    <Card
                    title="Software Tester"
                    description=""
                />
                <Card
                    title="Automation Tester"
                    description=""
                />
            </div>
        </section>
    );
};

export default About;