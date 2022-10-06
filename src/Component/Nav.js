import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import logo from '../Screenshot 2022-10-06 154400.png'

const Nav = () => {
    const [user] = useAuthState(auth)
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
                <img src={logo} alt="" className='w-80'/>
            </div>
            {user && (
              <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src={user.photoURL || 'https://icons.veryicon.com/png/128/miscellaneous/simple-linear-icon-2/user-371.png'} alt='' />
              </div>
            </label>
            )}
            {user && (
                <li>
                  <h1 class="justify-between text-md">
                    {user.email}
                  </h1>
                </li>
              )}
            <div class="navbar-end">
            
            </div>
        </div>
    );
};

export default Nav;