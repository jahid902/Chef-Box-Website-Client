import React from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-248px)]'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;