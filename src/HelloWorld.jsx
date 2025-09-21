import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function HelloWorld() {
  return (
    <div>
      <h2>Hello World!</h2>
      <nav>
        <Link to="hello">안녕하세요.</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default HelloWorld;
