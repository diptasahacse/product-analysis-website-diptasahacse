import React from 'react';
import MyLineChart from '../MyLineChart/MyLineChart';
import MyTinyBarChart from '../MyTinyBarChart/MyTinyBarChart';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className='container'>
            <h3>Dashboard</h3>
            <div className='my-5'>
                <div className="row">
                    <div className="col-lg-6">
                        <MyLineChart></MyLineChart>
                    </div>
                    <div className="col-lg-6">
                        <MyTinyBarChart></MyTinyBarChart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;