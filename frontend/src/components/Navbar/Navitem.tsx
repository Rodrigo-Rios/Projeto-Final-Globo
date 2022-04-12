import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

interface NavitemProps {
  children: React.ReactNode;
  to: string;
}

function Navitem(props: NavitemProps) {
  const resolved = useResolvedPath(props.to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <li className="nav-item">
      <Link to={props.to} className={match ? 'nav-link active' : 'nav-link'} aria-current="page">
        {props.children}
      </Link>
    </li>
  );
}

export default Navitem;
