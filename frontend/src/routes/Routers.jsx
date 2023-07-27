import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Contact from '../pages/Contact'
import Teachers from '../pages/Teachers/Teachers'
import TeacherDetails from '../pages/Teachers/TeacherDetails'

import { Routes, Route } from'react-router-dom';

const Routers = () => {
  return <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/teachers/:id" element={<TeacherDetails />} />
  </Routes>
}

export default Routers
