import "./Home.css";
import profile from "/home/ghost/code/projects/portfolioReact/portfolioReact/public/profile.jpeg";

const Home = () => {
    return (
        <main className="homebox">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Mohammad Kaif</h1>
                    <h2>Java Full Stack Developer</h2>

                    <p className="desc">
                        I'm a passionate full-stack developer skilled in building modern,
                        responsive web applications. Proficient in{" "}
                        <strong>HTML, CSS, JavaScript, React, and Tailwind CSS</strong> on
                        the frontend, I craft clean, intuitive user interfaces with an
                        excellent user experience. On the backend, I work with{" "}
                        <strong>Java</strong> and <strong>Spring Boot</strong> to build
                        robust, scalable, and secure RESTful APIs. I enjoy turning ideas
                        into modern, performant web applications using clean and
                        maintainable code.
                    </p>
                </div>

                <div className="hero-image">
                    <img src={profile} alt="Mohammad Kaif" />
                </div>
            </section>

            <hr className="line" />

            {/* Skills */}
            <section className="skills-section">
                <h2 className="skillheading">Skills</h2>

                <ul className="skillParent">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Tailwind CSS</li>
                    <li>Java</li>
                    <li>Spring Boot</li>
                    <li>Git</li>
                    <li>GitHub</li>
                </ul>
            </section>

            <hr className="line" />

            {/* Projects */}
            <section className="projects-section">
                <h2 className="projects">Projects</h2>

                <ul className="skillParent">
                    <li>Portfolio Website</li>
                    <li>ZenChat</li>
                    <li>Todo App</li>
                    <li>Quiz Site</li>
                    <li>Stopwatch</li>
                    <li>Signup Page</li>
                </ul>
            </section>
        </main>
    );
};

export default Home;