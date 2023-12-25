"use client"
import React, { useState, useContext } from 'react';
import LoginCard from '@/components/Login/Login';

const Login = () => {
    return (
        <div className=' h-screen flex items-center'>
            <LoginCard/>
        </div>
    );
};

export default Login;
