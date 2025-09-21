import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function History() {
  return (
    <div>
      <h2>History</h2>
      <nav>
        <Link to="education">학력</Link> |{" "}
        <Link to="awards">수상이력</Link> |{" "}
        <Link to="experience">경력</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default History;
