import { Link, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies" end>
            Movies
          </Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
