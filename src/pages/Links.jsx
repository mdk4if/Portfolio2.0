import "./Links.css";

const Links = () => {
  return (
    <div className="links-container">
      <h1>Links</h1>

      <ul className="links-list">
        <li>
          <a href="https://github.com/mdk4if/reactStopwatch" target="_blank" rel="noopener noreferrer">
            Stopwatch
          </a>
        </li>

        <li>
          <a href="https://github.com/mdk4if/reactTodo" target="_blank" rel="noopener noreferrer">
            Todo
          </a>
        </li>

        <li>
          <a href="https://github.com/mdk4if/quizSite" target="_blank" rel="noopener noreferrer">
            Quiz Site
          </a>
        </li>

        <li>
          <a href="https://www.instagram.com/shaikh.kaif0" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </li>

        <li>
          <a href="https://github.com/mdk4if" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Links;