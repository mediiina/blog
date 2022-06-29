import React from 'react'
import "./topbar.css"
import {Link} from 'react-router-dom'

export default function TopBar() {
  const user = true;
  return (
    
    <div className="top">
        <div className="topLeft">
          <i className="topIcon fa-brands fa-facebook-square"></i>
          <i className="topIcon fa-brands fa-github-square"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">HOME</Link>
              </li>
            <li className="topListItem">
              <Link className="link" to="/about">ABOUT</Link></li>
            <li className="topListItem">
              <Link className="link" to="/write">WRITE</Link></li>
            <li className="topListItem">
              {user && "LOGOUT"}
              </li>
        </ul>
        </div>
        <div className="topRight">
          {
            user ? (
              <img className="topImg"src="https://scontent-vie1-1.xx.fbcdn.net/v/t1.15752-9/289020598_5512498845479661_349701697249341687_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=tRkwuH9dj9QAX_SMHHa&_nc_ht=scontent-vie1-1.xx&oh=03_AVJGpD_MBt0Yd5pxi5efoOTwjGkxRyYFRi7abZm-qSPzhg&oe=62DB2623" alt="" />
            ) : (
              <ul className ="topList">
                <li className="topListItem">
                   <Link className="link" to="/login">LOGIN</Link>
                </li>
                <li className="topListItem">
                   <Link className="link" to="/register">REGISTER</Link>
                </li>
              </ul>
            )
          }
          
          <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>  
        </div>
        
    </div>
  )
}

