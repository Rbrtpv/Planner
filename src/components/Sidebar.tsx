import { Link } from "react-router-dom";
import Button from "./Button";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>panel</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Layout</Link>
          </li>
          <li>
            <Link to="/editor">Editor</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Button to="/editor">+ New activity</Button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
