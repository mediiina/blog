import React from 'react'
import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://www.dragoninsure.com/wp-content/uploads/2019/05/coastal-family-health-travel-clinic.jpg" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet consectetur 
                <div className="singlePostEdit">
                  <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                  <i className="singlePostIcon fa-solid fa-delete-left"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author: <b> Medina </b>
                </span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, eveniet fugiat deserunt voluptatibus labore iusto magni dolor quasi ex harum alias culpa quod blanditiis quaerat! Pariatur aspernatur iusto veritatis veniam.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam incidunt eligendi ex velit aspernatur hic omnis praesentium quasi ipsam temporibus nisi commodi ipsum nobis, consectetur neque corrupti accusantium veritatis error.
            </p>
        </div>
    </div>
  )
}
