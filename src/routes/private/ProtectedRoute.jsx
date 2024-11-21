import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';

export default function ProtectedRoute({ children }) {
  const { tokens } = useAuth();

  if (!tokens.access) {
    return <Navigate to="/" replace />;
  }

  return (
    children
  );
}