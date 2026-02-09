import React from 'react'
import { Routes, Route } from "react-router-dom";
import UserRegister from '../pages/auth/UserRegister'
import UserLogin from '../pages/auth/UserLogin'
import PartnerRegister from '../pages/auth/PartnerRegister'
import PartnerLogin from '../pages/auth/PartnerLogin'

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/user/register' element={<UserRegister />} />
            <Route path='/user/login' element={<UserLogin />} />

            <Route path='/food-partner/register' element={<PartnerRegister />} />
            <Route path='/food-partner/login' element={<PartnerLogin />} />

            <Route path='/create-food' element={ <h1> Create food page</h1> } />

            <Route path='/' element={<h1>Home page</h1>} />
        </Routes>
    )
}

export default AppRouter
