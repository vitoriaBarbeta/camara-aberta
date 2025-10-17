// src/components/Sidebar.js
import React from 'react';
import UpcomingSessions from './UpcomingSessions';
import CouncilorActivity from './CouncilorActivity';
import QuickStats from './QuickStats';

function Sidebar() {
    return (
        <div className="lg:w-1/3">
            <UpcomingSessions />
            <CouncilorActivity />
            <QuickStats />
        </div>
    );
}

export default Sidebar;