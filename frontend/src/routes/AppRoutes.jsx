import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from '../pages/Auth/UserLogin'
import UserRegister from '../pages/Auth/UserRegister'
import PartnerLogin from '../pages/Auth/PartnerLogin'
import PartnerRegister from '../pages/Auth/PartnerRegister'


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/user/register" element={<UserRegister />} />
            <Route path="/user/login" element={<UserLogin />} />
            <Route path="/partner/register" element={<PartnerRegister />} />
            <Route path="/partner/login" element={<PartnerLogin />} />
        </Routes>
    )
}

export default AppRoutes