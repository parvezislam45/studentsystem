import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth)
    };
    const navigate = useNavigate()
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-2xl font-bold text-purple-500 text-center'>Welcome to your Resoulate Ai</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side mt-10">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard/add">Add Student</Link></li>
                    <li><Link to="/dashboard/all">All Student</Link></li>
                    {user ? (
                        <li><button className="btn btn-ghost" onClick={logout}>
                            Log Out
                        </button></li>
                    ) : (
                        navigate("/")
                    )}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;