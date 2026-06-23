import { Navigate, Route, Routes } from 'react-router-dom';
import AdminLayout from './components/admin/AdminLayout';
import { RequireAuth } from './components/admin/RequireAuth';
import Shell from './components/Shell';
import AboutPage from './pages/About/AboutPage';
import ContactsPage from './pages/Admin/Contacts/ContactsPage';
import LoginPage from './pages/Admin/Login/LoginPage';
import AdminProjectsPage from './pages/Admin/Projects/ProjectsPage';
import ContactPage from './pages/Contact/ContactPage';
import HomePage from './pages/Home/HomePage';
import ProjectsPage from './pages/Projects/ProjectsPage';
import ProjectDetailPage from './pages/Projects/ProjectDetailPage';
import ServicesPage from './pages/Services/ServicesPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Shell />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:id" element={<ProjectDetailPage />} />
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
