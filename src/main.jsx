import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HomeLayout from './components/HomeLayout.jsx'
import AdminLayout from './components/AdminLayout.jsx'
import HomePage from './components/home/HomePage.jsx'
import CreateJob from './components/createJob/CreateJob.jsx'
import JobDetails from './components/detailsPage/JobDetails.jsx'
import Login from './components/User/Login.jsx'
import Admin from './components/admin/Admin.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomeLayout />}>
        <Route path='' element={<HomePage />} />
        <Route path='jobdetails/:id' element={<JobDetails />} />
        <Route path='login' element={<Login />} />
      </Route>,
      <Route path="/admin" element={<AdminLayout />}>
        <Route path='' element={<Admin />} />
        <Route path='createjob' element={<CreateJob />} />
      </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
)
