import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function UserDashboard() {
  return <div className="p-4">Benvingut/da, usuari!</div>;
}

function AdminPanel() {
  return <div className="p-4">Panell d'administració</div>;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/user"
            element={
              <ProtectedRoute requiredRole="USER">
                <UserDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute requiredRole="ADMIN">
                <AdminPanel />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;