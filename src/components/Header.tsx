import React from 'react';
import { Link } from 'react-router-dom';

function Header(props: any) {
  return (
    <Header>
      <div>
        <ul>
          <li>
            <Link to="/season1">mes1</Link>
          </li>
          <li>
            <Link to="/season2">mes2</Link>
          </li>
          <li>
            <Link to="/season3">mes3</Link>
          </li>
          <li>
            <Link to="/season4">mes4</Link>
          </li>
        </ul>
      </div>
    </Header>
  );
}
export default Header;
