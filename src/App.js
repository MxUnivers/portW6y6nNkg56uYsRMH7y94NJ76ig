

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routing } from './configurations/routing';
import Layout from './layout/Layout';
import LayoutAdmin from './layout/LayoutAdmin';
import logo from './logo.svg';
import AboutUsPage from './pages/AboutUsPage';
import DashbordPage from './pages/admin/dashbord/DashbordPage';
import ProjectAddPage from './pages/admin/projects/ProjectAddPage';
import ProjectDelete from './pages/admin/projects/ProjectDelete';
import ProjectEditPage from './pages/admin/projects/ProjectEditPage';
import ProjectListPage from './pages/admin/projects/ProjectListPage';
import ServiceAddPage from './pages/admin/services/ServiceAddPage';
import ServiceDelete from './pages/admin/services/ServiceDelete';
import ServiceEditPage from './pages/admin/services/ServiceEditPage';
import ServiceListPage from './pages/admin/services/ServiceListPage';
import SettingPage from './pages/admin/settings/SettingPage';
import UserAddPage from './pages/admin/users/UserAddPage copy';
import UserDeletePage from './pages/admin/users/UserDeletePage';
import UserEditPage from './pages/admin/users/UserEditPage';
import UserListPage from './pages/admin/users/UserListPage';
import UserPasswordPage from './pages/admin/users/UserPasswordPage';
import ContactPage from './pages/ContactPage';
import LandingPage from './pages/LandingPage';
import NotFoundPage from './pages/NotFoundPage';
import ProjectPage from './pages/ProjectPage';
import ServicePage from './pages/ServicePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        // Route
          <Route path='' element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path={`${routing.aboutus}`} element={<AboutUsPage />} />
            <Route path={`${routing.services}`} element={<ServicePage />} />
            <Route path={`${routing.project}`} element={<ProjectPage />} />
            <Route path={`${routing.contact}`} element={<ContactPage />} />
            <Route path='*' element={<NotFoundPage/>}/>
          </Route>

          {/* administrateur */}
          <Route path={`${routing.admin}`} element={<LayoutAdmin />} >

            <Route index element={<DashbordPage />} />
            {/* Utlisateur de l'applications */}
            <Route path={`${routing.userlist}`} element={<UserListPage />} />
            <Route path={`${routing.useradd}`} element={<UserAddPage />} />
            <Route path={`${routing.userlist}/${routing.useredit}/:id`} element={<UserEditPage />} />
            <Route path={`${routing.userlist}/${routing.userdelete}/:id`} element={<UserDeletePage />} />
            <Route path={`${routing.userlist}/${routing.userpaswword}/:id`} element={<UserPasswordPage />} />

            {/* services */}
            <Route path={`${routing.servicelist}`} element={<ServiceListPage />} />
            <Route path={`${routing.serviceadd}`} element={<ServiceAddPage />} />
            <Route path={`${routing.serviceedit}/:id`} element={<ServiceEditPage />} />
            <Route path={`${routing.servicedelete}/:id`} element={<ServiceDelete />} />
            


             {/* Projets */}
             <Route path={`${routing.project_list}`} element={<ProjectListPage />} />
             <Route path={`${routing.project_add}`} element={<ProjectAddPage />} />
             <Route path={`${routing.project_edit}/:id`} element={<ProjectEditPage />} />
             <Route path={`${routing.project_delete}/:id`} element={<ProjectDelete />} />

              {/* Paramètre des pages */}
             <Route path={`${routing.parameter_page}`} element={<SettingPage />} />

             <Route path='*' element={<NotFoundPage/>}/>

          </Route>


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
