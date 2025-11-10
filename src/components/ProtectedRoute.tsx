import type { JSX } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

interface Props {
  children: JSX.Element;
  requiredRole?: 'USER' | 'ADMIN';
}

export default function ProtectedRoute({ children, requiredRole }: Props) {
  const { token, role } = useAuth();

  if (!token) {
    return <Navigate to="/" replace />;
  }

  if (requiredRole && role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  return children;
}
