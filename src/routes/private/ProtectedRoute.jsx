import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';

export default function ProtectedRoute({ children }) {
  const { refreshToken } = useAuth();

  if (!refreshToken) {
    return <Navigate to="/" replace />;
  }

  return (
    children
  );
}