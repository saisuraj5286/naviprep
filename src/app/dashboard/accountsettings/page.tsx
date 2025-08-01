'use client';

import React, { useState } from 'react'
import Sidebar from '../../_components/Dashboard/Sidebar'
import Interviewgrid from '../../_components/interviews/Interviewgrid';


const page = () => {
    const [activeMenuItem, setActiveMenuItem] = useState('dashboard');
  return (
    <div>
      <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar/>
      
      {/* Main Content */}
        
    </div>
    </div>
  )
}

export default page
