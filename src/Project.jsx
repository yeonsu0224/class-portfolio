import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Project() {
  return (
    <div>
      <h2>Project</h2>
      <nav>
        <Link to="html-css">html,css</Link> |{" "}
        <Link to="javascript">javascript</Link> |{" "}
        <Link to="react">react</Link> |{" "}
        <Link to="video">video</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default Project;
