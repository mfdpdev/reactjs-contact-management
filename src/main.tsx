import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import Layout from './components/User/Layout.tsx'
import UserSignIn from "./components/User/UserSignIn.tsx"

import { BrowserRouter, Routes, Route } from "react-router"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route element={<Layout />}>
          <Route path="/auth/signin" element={<UserSignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
