import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Layout from './components/User/Layout.tsx'
import UserSignIn from "./components/User/UserSignIn.tsx"

import { BrowserRouter, Routes, Route } from "react-router"
import UserSignUp from './components/User/UserSignUp.tsx'
import DashboardLayout from './components/User/DashboardLayout.tsx'
import UserProfile from './components/User/UserProfile.tsx'
import UserLogout from './components/User/Userlogout.tsx'
import ContactList from './components/Contact/ContactList.tsx'
import ContactCreate from './components/Contact/ContactCreate.tsx'
import ContactEdit from './components/Contact/ContactEdit.tsx'
import ContactDetail from './components/Contact/ContactDetail.tsx'
import AddressCreate from './components/Address/AddressCreate.tsx'
import AddressEdit from './components/Address/AddressEdit.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<Layout />}>
          <Route path="signin" element={<UserSignIn />} />
          <Route path="signup" element={<UserSignUp />} />
        </Route>

        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route path='users'>
            <Route path="profile" element={<UserProfile />} />
            <Route path="logout" element={<UserLogout />} />
          </Route>

          <Route path='contacts'>
            <Route path="" element={<ContactList />} />
            <Route path='create' element={<ContactCreate />} />
            <Route path=':id'>
              <Route path='' element={<ContactDetail />} />
              <Route path='edit' element={<ContactEdit />} />
              <Route path='addresses'>
                <Route path=':addressesId'>
                  <Route path='edit' element={<AddressEdit />} />
                </Route>
                <Route path='create' element={<AddressCreate />} />
              </Route>
            </Route>
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
