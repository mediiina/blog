import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className="aboutImg"
            src="https://scontent-vie1-1.xx.fbcdn.net/v/t1.15752-9/289020598_5512498845479661_349701697249341687_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=tRkwuH9dj9QAX_SMHHa&_nc_ht=scontent-vie1-1.xx&oh=03_AVJGpD_MBt0Yd5pxi5efoOTwjGkxRyYFRi7abZm-qSPzhg&oe=62DB2623" 
            alt=""
            />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat rem quam voluptate nisi eveniet assumenda veritatis, earum ratione reprehenderit excepturi sunt natus. Quibusdam ad quaerat quam doloremque temporibus odit natus?</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">World</li>
                <li className="sidebarListItem">BiH</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
               <i className="sidebarIcon fa-brands fa-facebook-square"></i>
               <i className="sidebarIcon fa-brands fa-github-square"></i>
            </div>
        </div>
        
    </div>
  )
}

