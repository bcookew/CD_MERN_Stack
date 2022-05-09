import React, {useContext} from 'react';
import MyContext from './MyContext';

const NavBar = props => {
    const {userName, setUserName} = useContext(MyContext)
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <span className="navbar-brand">Welcome, <strong>{userName ? userName : "User"}</strong>!</span>
            </div>
        </nav>
    )
}

export default NavBar;