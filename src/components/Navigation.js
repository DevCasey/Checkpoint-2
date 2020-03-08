import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component {
    






    render() {
        let isLogged = document.cookie;
        return (
            <div className="nav-bar-container">
                <div className="inner-container">

                    <div className="small-business">
                        <h3 className="business-text">Austin Small Business</h3>
                    </div>

                    <div className="listing-login-container">
                        <div className="listing-container">
                            <h4 className="listing-button"><Link to="/">Listings</Link></h4>
                        </div>

                        <div className="login-container">
                            <h4 className="login-button" onClick={() => {
                                isLogged = "loggedIn="
                                window.location.replace('/Login')
                            }}><Link to='/Login'>Login</Link></h4>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}


















// import React from 'react'
// import { AppBar, Toolbar, IconButton, 
//     Typography } from '@material-ui/core'
// import MenuIcon from '@material-ui/icons/Menu'
// import { Link } from 'react-router-dom'

// const Navigation = () => {
//     return (
//         <AppBar position="relative">
//             <Toolbar>
//                 <IconButton color="inherit">
//                     <MenuIcon />
//                 </IconButton>
//                 <Typography variant="h6" style={{ flexGrow: "1" }}>
//                     FakeCars.com
//                 </Typography>
//                 <ul className="nav-list">
//                     <li className="nav-list-item">
//                         <Link to="/">Home</Link>
//                     </li>
//                     <li className="nav-list-item">
//                         <Link to="/about">About</Link>
//                     </li>
//                     <li className="nav-list-item">
//                         <Link to="/dashboard">Dasboard</Link>
//                     </li>
//                     <li className="nav-list-item">
//                         <Link to="/import">Import</Link>
//                     </li>
                    
//                 </ul>
//             </Toolbar>
//         </AppBar>
//     )
// }

// export default Navigation