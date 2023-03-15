import React, { useState, useEffect }  from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const location = useLocation(); // once ready it returns the 'window.location' object
    
    const [url, setUrl] = useState(null);
    useEffect(() => {
      setUrl(location.pathname);
    }, [location]);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
            <div className="container-fluid">
                <Link to='/' className={"navbar-brand pb-2" + (url === "/" ?"" : " pb-1")}>CMS</Link>

                <ul className='navbar-nav'>
                    <li className='nav-item px-2 border-right border-left'>
                        <Link to='/courses' className={"nav-link" + (url === "/courses" ?" active" : " pb-2")}>Courses</Link>
                    </li>

                    <li className='nav-item px-2'>
                        <Link to='/students' className={"nav-link" + (url === "/students" ?" active" : " pb-2")}>Students</Link>
                    </li>

                    <li className='nav-item px-2'>
                        <Link to='/lecturers' className={"nav-link" + (url === "/lecturers" ?" active" : " pb-2")}>Lecturers</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;