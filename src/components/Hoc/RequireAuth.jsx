import { useLocation, Navigate } from 'react-router-dom';

const RequireAuth = () => {
  const location = useLocation();
  const auth = false;

  return <div></div>;
};

export { RequireAuth };
