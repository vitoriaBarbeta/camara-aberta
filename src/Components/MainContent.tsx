// src/components/MainContent.js
import React from 'react';
import ProjectList from './ProjectList'; 
import Sidebar from './Sidebar'; 

function MainContent() {
    return (
        <div className="flex flex-col lg:flex-row gap-8">
            <ProjectList />
            <Sidebar />
        </div>
    );
}

export default MainContent;