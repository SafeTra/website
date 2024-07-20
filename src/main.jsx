import React from 'react'
import ReactDOM from 'react-dom/client'
import 'react-toastify/ReactToastify.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import { NotFound, RootLayout, HomeLayout, DashboardLayout, AdminLayout } from './layouts'
import { Home, About, Contact, Dashboard, Pricing, Login, Logout, Messages, Users, Settings, Signup, ForgotPass, ResetPass, Transaction, Integration, Disputes, Payments, NewTransaction, ConfirmEmail, ReviewTransaction, Services, Support} from '.'

import './index.css'
import Context from './data/Context'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path='/user' element={<DashboardLayout />} >
        <Route index element={<Transaction />} />
        <Route path='transaction' element={<Transaction />} />
        <Route path='new-transaction' element={<NewTransaction />} />
        <Route path='review-transaction' element={<ReviewTransaction />} />
        <Route path="integration" element={<Integration />} />
        <Route path="disputes" element={<Disputes />} />
        <Route path="payments" element={<Payments />} />
        <Route path="settings" element={<Settings />} />
        <Route path="logout" element={<Logout />} />
      </Route>
      <Route path='/admin' element={<AdminLayout />} >
        <Route index element={<Dashboard />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="messages" element={<Messages />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="settings" element={<Settings />} />
        <Route path="logout" element={<Logout />} />
      </Route>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/confirm-email" element={<ConfirmEmail />} />
      <Route path="/forgotpassword" element={ <ForgotPass/> } />
      <Route path="/reset-password" element={ <ResetPass/> } />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </React.StrictMode>,
)
