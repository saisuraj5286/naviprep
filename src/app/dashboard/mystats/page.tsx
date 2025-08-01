'use client';

import React, { useState } from 'react'
import Sidebar from '../../_components/Dashboard/Sidebar'
import UserProfile from '../../_components/stats/UserProfile';
import Header from '../../_components/stats/Header';
import Cards from '../../_components/stats/Cards';


const page = () => {
    
  return (
    <div>
      <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar/>
      
      {/* Main Content */}
      <div>
        <Header/>
        <UserProfile/>
        <Cards/>
      </div>
    </div>
    </div>
  )
}

export default page
