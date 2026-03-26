import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout';
import DashboardPage from './pages/DashboardPage';
import SettingsPage from './pages/SettingsPage';
import UsersPage from './pages/UsersPage';

function App() {
  return (
    <ErrorBoundary fallback={<div className="p-4 text-red-500 bg-gray-900 min-h-screen flex items-center justify-center">Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.</div>}>
      <Router>
        <div className="min-h-screen bg-gray-950 text-gray-100 font-sans antialiased">
          <Toaster position="bottom-right" reverseOrder={false} />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<DashboardPage />} />
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="users" element={<UsersPage />} />
              <Route path="settings" element={<SettingsPage />} />
              {/* Adicione outras rotas aqui conforme necessário */}
            </Route>
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;