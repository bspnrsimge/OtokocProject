import React,{useState} from 'react';

import './Dashboard.css';
import logo from '../../Images/logo.png';
import profileIcon from '../../Images/profile.png';
import ProductList from '../../Components/ProductList/ProductList';


function Dashboard(props) {
  
  return (
    <div className="Main">
        <header>
            <div className='profile'>
                <img src={profileIcon} />
                <h1>John Dou</h1>
            </div>
            <img src={logo} className='logo' />
        </header>
        <div className='DashboardContent'>
            <ProductList />
        </div>
    </div>
  );
}

export default Dashboard;
