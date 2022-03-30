import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
   return (
      <div>
         <h1>Welcome to my fancy Routing!!!</h1>
         <nav className='navbar'>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/friends">Friends</CustomLink>
            <CustomLink to='/posts'>Posts</CustomLink>
            <CustomLink to="/about">About</CustomLink>
         </nav>
      </div>
   );
};

export default Header;