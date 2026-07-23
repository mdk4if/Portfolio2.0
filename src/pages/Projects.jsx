import "./Projects.css"

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <h2>Todo</h2>
      <h3>
        <a href="https://github.com/mdk4if/reactTodo" target="_">
          Source Code
        </a>
      </h3>
      <p>
        Todo App is a clean, modern, and fully functional Todo List application
        built with **React 19** and **Vite**. It provides an intuitive and
        delightful way to manage your daily tasks with a sleek dark-themed
        interface, smooth hover effects, and seamless animations. The app allows
        users to effortlessly add new tasks, edit existing ones inline, delete
        tasks, and reorder them by moving them up or down the list. All tasks
        are automatically saved in the browser's localStorage, ensuring your
        data persists even after refreshing or closing the browser. Designed
        with responsiveness in mind, the application looks and works beautifully
        across desktop, tablet, and mobile devices. Built using React (v19),
        Vite, modern JavaScript (ES6+), and custom CSS3, this project
        demonstrates clean component architecture, efficient state management,
        and polished user experience design. It's an excellent showcase of a
        production-ready frontend application with essential CRUD functionality
        and thoughtful UX details.
      </p>

      <h2>Stopwatch</h2>
      <h3>
        <a href="https://github.com/mdk4if/reactStopwatch" target="_">
          Source Code
        </a>
      </h3>
      <p>
        Stopwatch is a simple, accurate, and fully responsive stopwatch
        application built with React using modern functional components and
        hooks. The app allows users to start, pause, resume, and reset the timer
        with precise time tracking. It features millisecond-level accuracy using
        `Date.now()`, displaying time in the clean **MM:SS:CS** format
        (Minutes:Seconds:Centiseconds). With real-time updates every 10
        milliseconds, the stopwatch maintains perfect timing without drift, even
        when paused and resumed. Built with `useState`, `useEffect`, and
        `useRef`, the application efficiently manages running state, elapsed
        time, and interval references. Its minimalistic design, smooth
        performance, and responsive layout make it a pleasure to use on any
        device. This project showcases strong proficiency in React hooks, timer
        logic, and accurate state management using vanilla JavaScript and CSS.
        Ideal for developers looking to demonstrate clean, functional React code
        and practical real-time application development.
      </p>

      <h2>Quiz Site</h2>
      <h3>
        <a href="https://github.com/mdk4if/quizSite" target="_">
          Source Code
        </a>
      </h3>
      <p>
        Quiz Appis a simple, interactive, and fully responsive quiz application
        built using **HTML5, CSS3, and Vanilla JavaScript**. It allows users to
        navigate through multiple-choice questions, select answers with clear
        visual feedback, move between questions using Previous and Next buttons,
        and view their final score upon completion. The app also includes a
        restart functionality so users can retake the quiz anytime. Featuring a
        clean modern UI with smooth hover effects and animations, the quiz
        dynamically loads questions from JavaScript and maintains selected
        answers while offering a seamless experience on both desktop and mobile
        devices. This project highlights strong skills in DOM manipulation,
        event handling, and responsive web design using pure frontend
        technologies. Perfect for demonstrating interactive JavaScript logic and
        user-friendly interface development.
      </p>
    </div>
  );
};

export default Projects;
