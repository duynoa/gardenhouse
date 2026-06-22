import { Routes, Route, Navigate } from 'react-router-dom';
import Shell from './components/Shell';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import ServicesPage from './pages/Services/ServicesPage';
import ProjectsPage from './pages/Projects/ProjectsPage';
import ContactPage from './pages/Contact/ContactPage';
import AdminLayout from './components/admin/AdminLayout';
import { RequireAuth } from './components/admin/RequireAuth';
import LoginPage from './pages/Admin/Login/LoginPage';
import ContactsPage from './pages/Admin/Contacts/ContactsPage';
import AdminProjectsPage from './pages/Admin/Projects/ProjectsPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Shell />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>

      <Route path="/admin" element={<LoginPage />} />
      <Route
        element={
          <RequireAuth>
            <AdminLayout />
          </RequireAuth>
        }
      >
        <Route path="/admin/contacts" element={<ContactsPage />} />
        <Route path="/admin/projects" element={<AdminProjectsPage />} />
      </Route>
    </Routes>
  );
}
